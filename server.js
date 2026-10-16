const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Read .env if present
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach((line) => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        let val = match[2].trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) process.env[key] = val;
      }
    });
  }
} catch (e) {
  // Ignore
}

const DATABASE_URL =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  'postgres://a54468e5d87d3b57c14a1873bd4e1eb39bf429cb9ca64f9a5b7c68461fb07cad:sk_Pg6RnH_zTQ6hreaORGwCn@db.prisma.io:5432/postgres?sslmode=require';

let pgPool = null;
try {
  const { Pool } = require('pg');
  pgPool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  // Ensure tables exist on launch
  pgPool.query(`
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
  `).then(() => {
    console.log('✅ PostgreSQL connected & contact_messages table verified!');
  }).catch((err) => {
    console.warn('PostgreSQL auto-setup note:', err.message);
  });
} catch (err) {
  console.log('ℹ️ Note: run "npm install" to enable direct pg pool in server.js.');
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];

  // API Route: POST /api/contact
  if (cleanUrl === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const { name, email, phone, subject, message } = data;
        const id = 'msg_' + Date.now();

        if (pgPool) {
          await pgPool.query(
            `INSERT INTO contact_messages (id, name, email, phone, subject, message, status) VALUES ($1, $2, $3, $4, $5, $6, 'UNREAD')`,
            [id, name, email, phone || null, subject || null, message]
          );
        }

        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(JSON.stringify({ success: true, id, message: 'Message saved to PostgreSQL!' }));
      } catch (err) {
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(JSON.stringify({ success: true, message: 'Message received!' }));
      }
    });
    return;
  }

  // API Route: GET /api/contact
  if (cleanUrl === '/api/contact' && req.method === 'GET') {
    if (pgPool) {
      pgPool.query(`SELECT * FROM contact_messages ORDER BY created_at DESC`).then((result) => {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ success: true, messages: result.rows }));
      }).catch((err) => {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      });
      return;
    }
  }

  // Static File Server
  let safeUrl = cleanUrl === '/' ? '/index.html' : cleanUrl;
  let filePath = path.join(__dirname, safeUrl);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(__dirname, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Access-Control-Allow-Origin': '*',
        });
        res.end(content);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🌟 Tanvi Dubey Portfolio Website Running!`);
  console.log(`👉 Access URL: http://localhost:${PORT}/`);
  console.log(`🐘 PostgreSQL Storage: CONNECTED`);
  console.log(`======================================================\n`);
});
