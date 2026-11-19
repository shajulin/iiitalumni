import http from 'http';
import url from 'url';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const DB_PATH = path.join(__dirname, 'alumni_portal.db');
const SQL_FILE = path.join(__dirname, 'alumni_portal_db.sql');

// Initialize database
let db;
function initDatabase() {
  const isNew = !fs.existsSync(DB_PATH);
  db = new Database(DB_PATH);

  if (isNew || db.prepare("SELECT count(*) as c FROM sqlite_master WHERE type='table'").get().c === 0) {
    console.log('🔄 Initializing database from SQL dump:', SQL_FILE);
    if (!fs.existsSync(SQL_FILE)) {
      console.error('❌ SQL file not found at:', SQL_FILE);
      return;
    }

    const sql = fs.readFileSync(SQL_FILE, 'utf8');

    // 1. Create tables
    const createRegex = /CREATE TABLE `([^`]+)` \(([\s\S]*?)\) ENGINE/g;
    let match;
    while ((match = createRegex.exec(sql)) !== null) {
      const tableName = match[1];
      let body = match[2];
      body = body.replace(/`id` int\(\d+\) NOT NULL,?/i, "`id` INTEGER PRIMARY KEY AUTOINCREMENT,");
      body = body.replace(/enum\([^)]+\)/gi, "TEXT");
      body = body.replace(/current_timestamp\(\)/gi, "CURRENT_TIMESTAMP");
      
      const createSql = `CREATE TABLE IF NOT EXISTS \`${tableName}\` (${body});`;
      db.exec(createSql);
    }

    // 2. Insert records
    const insertRegex = /INSERT INTO `([^`]+)` \(([^)]+)\) VALUES\s*([\s\S]*?);\r?\n/g;
    let insMatch;
    let count = 0;
    while ((insMatch = insertRegex.exec(sql)) !== null) {
      let query = insMatch[0];
      query = query.replace(/\\\\/g, "__DOUBLE_BACKSLASH__");
      query = query.replace(/\\'/g, "''");
      query = query.replace(/\\"/g, '"');
      query = query.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n");
      query = query.replace(/__DOUBLE_BACKSLASH__/g, "\\");

      try {
        db.exec(query);
        count++;
      } catch (err) {
        console.error(`⚠️ Import error for ${insMatch[1]}:`, err.message);
      }
    }
    console.log(`✅ Loaded ${count} table datasets from SQL file.`);
  } else {
    console.log('✅ SQLite database already loaded at', DB_PATH);
  }
}

initDatabase();

// Batch table mapping
const batchTableMap = {
  '2016': 'alumni_2016_batch',
  '2017': 'alumni_2017_batch',
  '2019': 'alumni_2019_admission',
  '2020': 'alumni_2020_admission',
  '2021': 'alumni_2021_admission',
  'higher_studies': 'alumni_higher_studies',
  'details_2024': 'alumni_details_2024'
};

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Handle CORS Preflight
  if (method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end();
    return;
  }

  // Health check
  if (pathname === '/health' || pathname === '/') {
    sendJSON(res, 200, { status: 'ok', server: 'Alumni Portal API Server', time: new Date() });
    return;
  }

  // Normalize path to allow both /alumni-portal/backend/api/... and /api/...
  const isApi = (suffix) => pathname.endsWith(suffix);

  // 1. LOGIN API
  if (isApi('/login.php') || isApi('/login')) {
    if (method !== 'POST') {
      sendJSON(res, 405, { status: 'error', message: 'Method not allowed' });
      return;
    }

    try {
      const { email, password } = await parseBody(req);
      if (!email || !password) {
        sendJSON(res, 400, { status: 'error', message: 'Incomplete credentials' });
        return;
      }

      const query = `
        SELECT u.id, u.full_name, u.email, u.password_hash, u.role, ap.batch, ap.roll_number
        FROM users u
        LEFT JOIN alumni_profiles ap ON ap.user_id = u.id
        WHERE u.email = ?
        LIMIT 1
      `;
      const row = db.prepare(query).get(email.trim());

      if (!row) {
        sendJSON(res, 404, { status: 'error', message: 'User not found' });
        return;
      }

      // Check password using bcrypt (handling $2y$ prefix from PHP)
      const storedHash = (row.password_hash || '').replace(/^\$2y\$/, '$2a$');
      const isValid = bcrypt.compareSync(password, storedHash);

      if (!isValid) {
        sendJSON(res, 401, { status: 'error', message: 'Invalid password' });
        return;
      }

      const batch = row.batch || null;
      const batchTable = batch ? (batchTableMap[batch] || null) : null;

      const user = {
        id: row.id,
        full_name: row.full_name,
        email: row.email,
        role: row.role,
        batch: batch,
        roll_number: row.roll_number || null,
        batch_table: batchTable
      };

      sendJSON(res, 200, {
        status: 'success',
        message: 'Login successful',
        user
      });
    } catch (err) {
      console.error('Login error:', err);
      sendJSON(res, 500, { status: 'error', message: 'Server error: ' + err.message });
    }
    return;
  }

  // 2. REGISTER API
  if (isApi('/register.php') || isApi('/register')) {
    if (method !== 'POST') {
      sendJSON(res, 405, { status: 'error', message: 'Method not allowed' });
      return;
    }

    try {
      const data = await parseBody(req);
      const fullName = (data.fullName || '').trim();
      const email = (data.email || '').trim();
      const password = data.password;
      const batch = (data.batch || '').trim();
      const rollNumber = (data.rollNumber || '').trim();

      if (!fullName || !email || !password || !batch || !rollNumber) {
        sendJSON(res, 400, { status: 'error', message: 'Incomplete data. Please fill all required fields.' });
        return;
      }

      const batchTable = batchTableMap[batch];
      if (!batchTable) {
        sendJSON(res, 400, { status: 'error', message: 'Invalid batch selected: ' + batch });
        return;
      }

      // Check if email already registered
      const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
      if (existing) {
        sendJSON(res, 400, { status: 'error', message: 'Email already registered' });
        return;
      }

      const hashedPassword = bcrypt.hashSync(password, 10);
      const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

      const insertTx = db.transaction(() => {
        // 1. Insert into users
        const userStmt = db.prepare('INSERT INTO users (full_name, email, password_hash, role) VALUES (?, ?, ?, ?)');
        const userRes = userStmt.run(fullName, email, hashedPassword, 'alumni');
        const userId = userRes.lastInsertRowid;

        // 2. Insert into alumni_profiles
        const profileStmt = db.prepare('INSERT INTO alumni_profiles (user_id, batch, roll_number, profile_completed) VALUES (?, ?, ?, 0)');
        profileStmt.run(userId, batch, rollNumber);

        // 3. Insert into batch-specific table dynamically matching table schema
        const nameParts = fullName.split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        const tableCols = db.prepare(`PRAGMA table_info(\`${batchTable}\`)`).all().map(c => c.name);
        const candidateData = {
          timestamp: now,
          username: email,
          first_name: firstName,
          last_name: lastName,
          student_name: fullName,
          roll_no: rollNumber,
          roll_number: rollNumber,
          dob: '',
          gender: '',
          mailing_address: '',
          permanent_address: '',
          communication_address: '',
          city: '',
          state: '',
          country: '',
          pincode: '',
          whatsapp_no: '',
          mobile_no: '',
          personal_email: email,
          email: email,
          present_status: '',
          occupation: '',
          organization: '',
          program: '',
          university: '',
          admission_year: '',
          country_of_employment: '',
          nationality: '',
          pay_level: '',
          is_govt_job: '',
          willingness_to_contribute: '',
          batch: batch,
          remarks: ''
        };

        const insertCols = [];
        const insertVals = [];
        for (const col of tableCols) {
          if (col === 'id') continue;
          if (col in candidateData) {
            insertCols.push(`\`${col}\``);
            insertVals.push(candidateData[col]);
          }
        }

        if (insertCols.length > 0) {
          const placeholders = insertCols.map(() => '?').join(', ');
          db.prepare(`INSERT INTO \`${batchTable}\` (${insertCols.join(', ')}) VALUES (${placeholders})`).run(...insertVals);
        }

        return { userId, batchTable };
      });

      insertTx();

      sendJSON(res, 200, {
        status: 'success',
        message: `Registration successful! Data saved to ${batchTable} table.`,
        batch,
        table: batchTable
      });
    } catch (err) {
      console.error('Registration error:', err);
      sendJSON(res, 500, { status: 'error', message: 'Database error: ' + err.message });
    }
    return;
  }

  // 3. ALUMNI DATA API
  if (isApi('/alumni_data.php') || isApi('/alumni_data')) {
    const dataset = parsedUrl.query.dataset;
    const table = batchTableMap[dataset];

    if (!table) {
      sendJSON(res, 400, { status: 'error', message: 'Invalid dataset specified' });
      return;
    }

    if (method === 'GET') {
      try {
        const rows = db.prepare(`SELECT * FROM \`${table}\` ORDER BY id ASC`).all();
        sendJSON(res, 200, { status: 'success', data: rows });
      } catch (err) {
        console.error('Error fetching alumni data:', err);
        sendJSON(res, 500, { status: 'error', message: err.message });
      }
      return;
    }

    if (method === 'POST') {
      try {
        const input = await parseBody(req);
        if (!input || Object.keys(input).length === 0) {
          sendJSON(res, 400, { status: 'error', message: 'Invalid input data' });
          return;
        }

        const columns = Object.keys(input);
        const colList = columns.map(c => `\`${c}\``).join(', ');
        const placeholders = columns.map(() => '?').join(', ');
        const values = Object.values(input);

        const sql = `INSERT INTO \`${table}\` (${colList}) VALUES (${placeholders})`;
        const result = db.prepare(sql).run(...values);

        sendJSON(res, 200, {
          status: 'success',
          message: 'Data inserted successfully',
          id: result.lastInsertRowid
        });
      } catch (err) {
        console.error('Error inserting alumni data:', err);
        sendJSON(res, 500, { status: 'error', message: err.message });
      }
      return;
    }

    sendJSON(res, 405, { status: 'error', message: 'Method not allowed' });
    return;
  }

  // Fallback 404
  sendJSON(res, 404, { status: 'error', message: 'Endpoint not found' });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  🚀 Alumni Portal Backend Server running on port ${PORT}`);
  console.log(`  🔗 Health: http://localhost:${PORT}/health`);
  console.log(`======================================================\n`);
});
