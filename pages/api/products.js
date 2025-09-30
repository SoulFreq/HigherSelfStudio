import { query } from '../../lib/db';
export default async function handler(req, res) {
  const result = await query('SELECT id, title FROM products', []);
  res.status(200).json({ products: result.rows });
}
