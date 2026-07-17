import mysql from 'mysql2/promise';

const c = await mysql.createConnection({
  host:'localhost', user:'root', password:'', database:'alumni_portal_db'
});

const tables = [
  'alumni_2016_batch',
  'alumni_2017_batch',
  'alumni_2019_admission',
  'alumni_2020_admission',
  'alumni_2021_admission',
  'alumni_details_2024'
];

for (const table of tables) {
  try {
    const [rows] = await c.query(`DESCRIBE \`${table}\``);
    console.log(`\n=== DESCRIBE ${table} ===`);
    rows.forEach(r => console.log(`${r.Field} (${r.Type})`));
  } catch (e) {
    console.error(`Error describing ${table}: ${e.message}`);
  }
}

try {
    const [rows] = await c.query(`DESCRIBE \`birthday_wishes_log\``);
    console.log(`\n=== DESCRIBE birthday_wishes_log ===`);
    rows.forEach(r => console.log(`${r.Field} (${r.Type})`));
} catch(e) {
    console.error(`Error describing birthday_wishes_log: ${e.message}`);
}


await c.end();
