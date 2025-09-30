import { query } from '../../lib/db';
export default async function handler(req, res) {
  try {
    const r = await query('SELECT 1 as ok');
    res.status(200).json({ ok: !!r });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
}
