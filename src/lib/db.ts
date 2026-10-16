import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

// Global variable cache for Next.js hot-reloading
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Direct PostgreSQL Connection Pool (compatible with any Postgres connection string)
const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.PRISMA_DATABASE_URL ||
  'postgres://a54468e5d87d3b57c14a1873bd4e1eb39bf429cb9ca64f9a5b7c68461fb07cad:sk_Pg6RnH_zTQ6hreaORGwCn@db.prisma.io:5432/postgres?sslmode=require';

const globalForPg = global as unknown as { pgPool: Pool | undefined };

export const pool =
  globalForPg.pgPool ||
  new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
    max: 10,
    idleTimeoutMillis: 30000,
  });

if (process.env.NODE_ENV !== 'production') globalForPg.pgPool = pool;

/**
 * Initialize database tables directly if not already created
 */
export async function ensureTablesExist() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(64),
        subject VARCHAR(255),
        message TEXT NOT NULL,
        status VARCHAR(32) DEFAULT 'UNREAD',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS site_visitors (
        id VARCHAR(64) PRIMARY KEY,
        path VARCHAR(255) DEFAULT '/',
        ip VARCHAR(64),
        user_agent TEXT,
        visited_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS site_analytics (
        id VARCHAR(64) PRIMARY KEY,
        page_views INT DEFAULT 0,
        inquiries INT DEFAULT 0,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      INSERT INTO site_analytics (id, page_views, inquiries)
      VALUES ('global', 1, 0)
      ON CONFLICT (id) DO NOTHING;
    `);
  } catch (err) {
    console.error('Error ensuring database tables exist:', err);
  } finally {
    client.release();
  }
}
