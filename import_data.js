import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import xlsx from 'xlsx';
import mysql from 'mysql2/promise';

// Config
const DB_CONFIG = {
  host: 'localhost',
  user: 'root', // Update this if your mysql username is different
  password: '', // Update this if your mysql password is not empty
  database: 'alumni_portal_db',
  multipleStatements: true // needed if we execute multiple create statements
};

const DOWNLOADS_DIR = 'C:\\Users\\IIITK\\Downloads';

const datasets = [
  { file: 'Alumni Form 2016 Batch.csv', table: 'alumni_2016_batch', type: 'csv' },
  { file: 'Alumni Form 2017 Batch.csv', table: 'alumni_2017_batch', type: 'csv' },
  { file: 'Alumni Form 2019 Admission.csv', table: 'alumni_2019_admission', type: 'csv' },
  { file: 'Alumni Form 2020 Admission.csv', table: 'alumni_2020_admission', type: 'csv' },
  { file: 'Alumni Details - 30.12.24.csv', table: 'alumni_details_2024', type: 'csv' },
  { file: 'Alumni Form 2021 Admission.xlsx', table: 'alumni_2021_admission', type: 'xlsx' },
  { file: 'Alumni-HigherStudies.xlsx', table: 'alumni_higher_studies', type: 'xlsx' }
];

async function setupTables(connection) {
  console.log("Creating tables if they do not exist...");
  
  const tablesSql = `
    CREATE TABLE IF NOT EXISTS \`alumni_2016_batch\` (
      \`id\` int(11) NOT NULL AUTO_INCREMENT,
      \`timestamp\` varchar(255),
      \`username\` varchar(255),
      \`first_name\` varchar(100),
      \`last_name\` varchar(100),
      \`dob\` varchar(50),
      \`roll_no\` varchar(50),
      \`mailing_address\` text,
      \`city\` varchar(100),
      \`state\` varchar(100),
      \`country\` varchar(100),
      \`pincode\` varchar(20),
      \`gender\` varchar(20),
      \`whatsapp_no\` varchar(50),
      \`personal_email\` varchar(255),
      \`permanent_address\` text,
      \`present_status\` varchar(100),
      \`organization\` varchar(255),
      \`remarks\` text,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS \`alumni_2017_batch\` (
      \`id\` int(11) NOT NULL AUTO_INCREMENT,
      \`timestamp\` varchar(255),
      \`username\` varchar(255),
      \`first_name\` varchar(100),
      \`last_name\` varchar(100),
      \`dob\` varchar(50),
      \`roll_no\` varchar(50),
      \`mailing_address\` text,
      \`city\` varchar(100),
      \`state\` varchar(100),
      \`country\` varchar(100),
      \`pincode\` varchar(20),
      \`gender\` varchar(20),
      \`whatsapp_no\` varchar(50),
      \`personal_email\` varchar(255),
      \`present_status\` varchar(100),
      \`organization\` varchar(255),
      \`remarks\` text,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS \`alumni_2019_admission\` (
      \`id\` int(11) NOT NULL AUTO_INCREMENT,
      \`timestamp\` varchar(255),
      \`username\` varchar(255),
      \`first_name\` varchar(100),
      \`last_name\` varchar(100),
      \`dob\` varchar(50),
      \`roll_no\` varchar(50),
      \`city\` varchar(100),
      \`state\` varchar(100),
      \`country\` varchar(100),
      \`pincode\` varchar(20),
      \`gender\` varchar(20),
      \`whatsapp_no\` varchar(50),
      \`personal_email\` varchar(255),
      \`present_status\` varchar(100),
      \`organization\` varchar(255),
      \`remarks\` text,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS \`alumni_2020_admission\` (
      \`id\` int(11) NOT NULL AUTO_INCREMENT,
      \`timestamp\` varchar(255),
      \`username\` varchar(255),
      \`first_name\` varchar(100),
      \`last_name\` varchar(100),
      \`dob\` varchar(50),
      \`roll_no\` varchar(50),
      \`city\` varchar(100),
      \`state\` varchar(100),
      \`country\` varchar(100),
      \`pincode\` varchar(20),
      \`gender\` varchar(20),
      \`whatsapp_no\` varchar(50),
      \`personal_email\` varchar(255),
      \`present_status\` varchar(100),
      \`organization\` varchar(255),
      \`remarks\` text,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS \`alumni_2021_admission\` (
      \`id\` int(11) NOT NULL AUTO_INCREMENT,
      \`timestamp\` varchar(255),
      \`username\` varchar(255),
      \`first_name\` varchar(100),
      \`last_name\` varchar(100),
      \`dob\` varchar(50),
      \`roll_no\` varchar(50),
      \`city\` varchar(100),
      \`state\` varchar(100),
      \`country\` varchar(100),
      \`pincode\` varchar(20),
      \`gender\` varchar(20),
      \`whatsapp_no\` varchar(50),
      \`personal_email\` varchar(255),
      \`present_status\` varchar(100),
      \`organization\` varchar(255),
      \`remarks\` text,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS \`alumni_higher_studies\` (
      \`id\` int(11) NOT NULL AUTO_INCREMENT,
      \`student_name\` varchar(255),
      \`roll_no\` varchar(50),
      \`program\` varchar(255),
      \`university\` varchar(255),
      \`country\` varchar(100),
      \`admission_year\` varchar(20),
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE IF NOT EXISTS \`alumni_details_2024\` (
      \`id\` int(11) NOT NULL AUTO_INCREMENT,
      \`timestamp\` varchar(255),
      \`student_name\` varchar(255),
      \`batch\` varchar(50),
      \`mobile_no\` varchar(50),
      \`whatsapp_no\` varchar(50),
      \`email\` varchar(255),
      \`communication_address\` text,
      \`permanent_address\` text,
      \`occupation\` varchar(255),
      \`country_of_employment\` varchar(100),
      \`nationality\` varchar(100),
      \`pay_level\` varchar(100),
      \`is_govt_job\` varchar(10),
      \`willingness_to_contribute\` text,
      PRIMARY KEY (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;

  // Since we have multipleStatements: true, we can execute them all at once.
  await connection.query(tablesSql);
  console.log("Tables successfully created or verified.");
}

async function insertData(connection, table, rows) {
  if (rows.length === 0) return;
  
  for (const row of rows) {
    const dbRow = {};
    for (const [key, val] of Object.entries(row)) {
      const k = key.toLowerCase();
      if (k.includes('timestamp')) dbRow.timestamp = val;
      else if (k.includes('username') || k.includes('email id')) dbRow.username = val;
      else if (table === 'alumni_details_2024' || table === 'alumni_higher_studies') {
         if (k.includes('name of the student') || k.includes('student name')) dbRow.student_name = val;
         else if (k.includes('batch')) dbRow.batch = val;
         else if (k.includes('mobile')) dbRow.mobile_no = val;
         else if (k.includes('whatsapp')) dbRow.whatsapp_no = val;
         else if (k.includes('email id') || k.includes('email')) dbRow.email = val;
         else if (k.includes('address of communication')) dbRow.communication_address = val;
         else if (k.includes('permanent address')) dbRow.permanent_address = val;
         else if (k.includes('occupation')) dbRow.occupation = val;
         else if (k.includes('country of employment')) dbRow.country_of_employment = val;
         else if (k.includes('nationality')) dbRow.nationality = val;
         else if (k.includes('pay level')) dbRow.pay_level = val;
         else if (k.includes('govt job')) dbRow.is_govt_job = val;
         else if (k.includes('willingness to contribute')) dbRow.willingness_to_contribute = val;
         else if (k.includes('program')) dbRow.program = val;
         else if (k.includes('university')) dbRow.university = val;
         else if (k.includes('admission year')) dbRow.admission_year = val;
         else if (k.includes('country')) dbRow.country = val;
         else if (k.includes('roll no')) dbRow.roll_no = val;
      }
      else if (k.includes('first name') || k.includes('name of the student') || k.includes('student name')) dbRow.first_name = val;
      else if (k.includes('last name')) dbRow.last_name = val;
      else if (k.includes('birth')) dbRow.dob = val;
      else if (k.includes('roll no')) dbRow.roll_no = val;
      else if (k.includes('mailing address') || k.includes('address of communication')) dbRow.mailing_address = val;
      else if (k.includes('city')) dbRow.city = val;
      else if (k.includes('state')) dbRow.state = val;
      else if (k.includes('country') && !k.includes('employment')) dbRow.country = val;
      else if (k.includes('pincode')) dbRow.pincode = val;
      else if (k.includes('gender')) dbRow.gender = val;
      else if (k.includes('whatsapp')) dbRow.whatsapp_no = val;
      else if (k.includes('personal email') || k.includes('email id')) dbRow.personal_email = val;
      else if (k.includes('permanent address')) dbRow.permanent_address = val;
      else if (k.includes('status') || k.includes('occupation')) dbRow.present_status = val;
      else if (k.includes('organization')) dbRow.organization = val;
      else if (k.includes('remarks') || k.includes('willingness')) dbRow.remarks = val;
      else if (k.includes('batch')) dbRow.batch = val;
      else if (k.includes('mobile')) dbRow.mobile_no = val;
      else if (k.includes('nationality')) dbRow.nationality = val;
      else if (k.includes('pay level')) dbRow.pay_level = val;
      else if (k.includes('govt job')) dbRow.is_govt_job = val;
      else if (k.includes('program')) dbRow.program = val;
      else if (k.includes('university')) dbRow.university = val;
      else if (k.includes('admission year')) dbRow.admission_year = val;
    }
    
    const columns = Object.keys(dbRow);
    const values = Object.values(dbRow);
    if (columns.length > 0) {
      const placeholders = columns.map(() => '?').join(', ');
      const sql = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`;
      try {
        await connection.execute(sql, values);
      } catch (err) {
        console.error(`Error inserting into ${table}:`, err.message);
      }
    }
  }
}

async function run() {
  console.log('Connecting to database...');
  let connection;
  try {
    connection = await mysql.createConnection(DB_CONFIG);
  } catch(e) {
    console.error("Could not connect to DB. Check credentials:", e.message);
    return;
  }
  
  await setupTables(connection);
  
  for (const ds of datasets) {
    const fullPath = path.join(DOWNLOADS_DIR, ds.file);
    if (!fs.existsSync(fullPath)) {
      console.log(`Skipping ${ds.file} - file not found at ${fullPath}`);
      continue;
    }

    console.log(`Processing ${ds.file} into table ${ds.table}...`);
    let rows = [];

    if (ds.type === 'csv') {
      await new Promise((resolve, reject) => {
        fs.createReadStream(fullPath)
          .pipe(csv())
          .on('data', (data) => rows.push(data))
          .on('end', () => resolve())
          .on('error', (error) => reject(error));
      });
    } else if (ds.type === 'xlsx') {
      const workbook = xlsx.readFile(fullPath);
      const sheetName = workbook.SheetNames[0];
      rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
    }

    console.log(`Parsed ${rows.length} rows. Inserting...`);
    await insertData(connection, ds.table, rows);
    console.log(`Finished ${ds.file}.`);
  }

  await connection.end();
  console.log('Bulk import complete!');
}

run();
