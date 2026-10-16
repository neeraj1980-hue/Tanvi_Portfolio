import { NextRequest, NextResponse } from 'next/server';
import { pool, ensureTablesExist } from '@/lib/db';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Ensure database tables exist
    await ensureTablesExist();

    const id = `msg_${crypto.randomUUID()}`;
    const client = await pool.connect();

    try {
      // Insert contact message into PostgreSQL
      const queryText = `
        INSERT INTO contact_messages (id, name, email, phone, subject, message, status, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5, $6, 'UNREAD', NOW(), NOW())
        RETURNING id, name, email, created_at;
      `;
      const values = [id, name, email, phone || null, subject || null, message];
      const result = await client.query(queryText, values);

      // Increment inquiry counter in analytics
      await client.query(`
        UPDATE site_analytics
        SET inquiries = inquiries + 1, updated_at = NOW()
        WHERE id = 'global';
      `);

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! Your message has been saved in the database.',
          data: result.rows[0],
        },
        { status: 201 }
      );
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error('PostgreSQL contact submission error:', error);
    return NextResponse.json(
      { error: 'Failed to save message to database.', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureTablesExist();
    const client = await pool.connect();
    try {
      const result = await client.query(`
        SELECT id, name, email, phone, subject, message, status, created_at
        FROM contact_messages
        ORDER BY created_at DESC;
      `);

      const stats = await client.query(`
        SELECT page_views, inquiries, updated_at FROM site_analytics WHERE id = 'global';
      `);

      return NextResponse.json({
        success: true,
        messages: result.rows,
        stats: stats.rows[0] || { page_views: 0, inquiries: 0 },
      });
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error('PostgreSQL get messages error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve messages from database.', details: error.message },
      { status: 500 }
    );
  }
}
