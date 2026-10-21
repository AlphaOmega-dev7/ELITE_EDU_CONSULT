// Debug script: tests if the publishable key can fetch published posts as anon
const fs = require('fs');
const path = require('path');

// Load .env manually
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split(/\r?\n/).forEach((line) => {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*"?(.*?)"?\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  });
}

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;

console.log('URL:', url);
console.log('Key prefix:', key ? key.slice(0, 30) + '...' : 'MISSING');

if (!url || !key) { console.error('Missing env vars'); process.exit(1); }

const isNewKey = key.startsWith('sb_publishable_') || key.startsWith('sb_secret_');
console.log('Is new-format key:', isNewKey);

// For new-format keys we only send apikey — no Authorization header
const headers = { 'apikey': key, 'Content-Type': 'application/json' };
if (!isNewKey) headers['Authorization'] = `Bearer ${key}`;

console.log('\nFetching posts...\n');

// Fetch ALL posts (including unpublished) using service role to check what's actually in the DB
const svcKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const fetchHeaders = svcKey && svcKey.length > 10
  ? { 'apikey': svcKey, 'Authorization': `Bearer ${svcKey}`, 'Content-Type': 'application/json' }
  : headers;
if (svcKey && svcKey.length > 10) console.log('Using service role to list ALL posts');
else console.log('No service role key — listing with anon (published only)');

fetch(`${url}/rest/v1/posts?select=id,title,slug,published,created_at&order=created_at.desc`, { headers: fetchHeaders })
  .then(async (res) => {
    const text = await res.text();
    console.log('HTTP Status:', res.status, res.statusText);
    try {
      console.log('Response:', JSON.stringify(JSON.parse(text), null, 2));
    } catch {
      console.log('Raw response:', text);
    }
  })
  .catch((err) => console.error('Fetch error:', err));
