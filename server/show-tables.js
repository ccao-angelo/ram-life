require('dotenv').config();
const pool = require('./db/pool');

async function showTables() {
  console.log("\n--- RUNNING: SELECT * FROM locations; ---");
  const locs = await pool.query('SELECT * FROM locations;');
  console.table(locs.rows);

  console.log("\n--- RUNNING: SELECT * FROM events; ---");
  const events = await pool.query('SELECT * FROM events;');
  console.table(events.rows);

  pool.end();
}
showTables();