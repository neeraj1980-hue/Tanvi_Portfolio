import { NextRequest, NextResponse } from 'next/server';
import { pool, ensureTablesExist } from '@/lib/db';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { path = '/' } = await req.json().catch(() => ({}));
    const ip = req.headers.get('x-forwarded-for') || 'local';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    await ensureTablesExist();
    const client = await pool.connect();
    try {
      const visitorId = `vis_${crypto.randomUUID()}`;
      await client.query(
        `INSERT INTO site_visitors (id, path, ip, user_agent, visited_at) VALUES ($1, $2, $3, $4, NOW())`,
        [visitorId, path, ip.substring(0, 64), userAgent]
      );

      await client.query(`
        UPDATE site_analytics
        SET page_views = page_views + 1, updated_at = NOW()
        WHERE id = 'global';
      `);

      return NextResponse.json({ success: true });
    } finally {
      client.release();
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await ensureTablesExist();
    const client = await pool.connect();
    try {
      const stats = await client.query(`SELECT * FROM site_analytics WHERE id = 'global'`);
      const recentVisitors = await client.query(
        `SELECT id, path, visited_at FROM site_visitors ORDER BY visited_at DESC LIMIT 10`
      );

      return NextResponse.json({
        success: true,
        analytics: stats.rows[0],
        recentVisitors: recentVisitors.rows,
      });
    } finally {
      client.release();
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
