import pkg from 'pg';
const { Pool } = pkg;
let pool;
if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
}
export async function query(text, params) {
  if (!pool) return { rows: [], rowCount: 0 };
  return pool.query(text, params);
}
