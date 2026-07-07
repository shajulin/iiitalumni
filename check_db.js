import mysql from 'mysql2/promise';

const DB_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'alumni_portal_db'
};

async function check() {
  const connection = await mysql.createConnection(DB_CONFIG);
  const [rows] = await connection.query('SELECT COUNT(*) as count FROM alumni_2016_batch');
  console.log(`2016 Batch Count: ${rows[0].count}`);
  await connection.end();
}
check();
