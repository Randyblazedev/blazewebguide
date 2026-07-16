const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3003;
const DATA_FILE = path.join(__dirname, 'data.json');

// Initialize data file
function loadData() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); }
  catch { return { users: {} }; }
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Parse JSON body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      try { resolve(JSON.parse(body)); }
      catch { resolve({}); }
    });
    req.on('error', reject);
  });
}

// Send JSON response
function sendJSON(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' });
  res.end(JSON.stringify(data));
}

// Verify challenge - check if code produces expected output
function verifyChallenge(lessonId, code) {
  // For now, simple verification: code must contain certain keywords
  const checks = {
    'html': code.includes('<') && code.includes('>'),
    'css': code.includes('{') && code.includes(':'),
    'js': code.includes('function') || code.includes('=>') || code.includes('const') || code.includes('let'),
  };
  // Check by lesson ID patterns
  if (lessonId.startsWith('b-html') || lessonId.startsWith('i-html')) {
    return code.includes('<') && code.includes('>') && code.includes('</');
  }
  if (lessonId.startsWith('b-css') || lessonId.startsWith('i-css')) {
    return code.includes('{') && code.includes(':') && code.includes('}');
  }
  if (lessonId.startsWith('b-js') || lessonId.startsWith('i-js') || lessonId.startsWith('a-js')) {
    return code.includes('const') || code.includes('function') || code.includes('=>') || code.includes('let');
  }
  if (lessonId.startsWith('a-react')) {
    return code.includes('import') || code.includes('useState') || code.includes('return');
  }
  if (lessonId.startsWith('a-node')) {
    return code.includes('require') || code.includes('express') || code.includes('app.');
  }
  // Default: just require some code
  return code.length > 20;
}

const server = http.createServer(async (req, res) => {
  // CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' });
    return res.end();
  }

  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;

  try {
    // Register/Login
    if (pathname === '/api/register' && req.method === 'POST') {
      const body = await parseBody(req);
      const { username } = body;
      if (!username || username.length < 2) return sendJSON(res, 400, { error: 'Username must be at least 2 characters' });
      
      const data = loadData();
      if (!data.users[username]) {
        data.users[username] = { username, createdAt: new Date().toISOString(), completed: [], challenges: [] };
      }
      saveData(data);
      return sendJSON(res, 200, { success: true, user: data.users[username] });
    }

    // Get user progress
    if (pathname === '/api/progress' && req.method === 'GET') {
      const username = parsed.query.username;
      if (!username) return sendJSON(res, 400, { error: 'Username required' });
      
      const data = loadData();
      const user = data.users[username];
      if (!user) return sendJSON(res, 404, { error: 'User not found' });
      return sendJSON(res, 200, { completed: user.completed, challenges: user.challenges });
    }

    // Mark lesson complete (verified - must submit code)
    if (pathname === '/api/complete' && req.method === 'POST') {
      const body = await parseBody(req);
      const { username, lessonId, code } = body;
      if (!username || !lessonId) return sendJSON(res, 400, { error: 'Username and lessonId required' });
      if (!code || code.length < 10) return sendJSON(res, 400, { error: 'You must submit your code to complete this lesson' });

      const data = loadData();
      const user = data.users[username];
      if (!user) return sendJSON(res, 404, { error: 'User not found' });

      // Verify the challenge
      if (!verifyChallenge(lessonId, code)) {
        return sendJSON(res, 400, { error: 'Challenge not passed. Make sure your code is correct.' });
      }

      // Mark complete
      if (!user.completed.includes(lessonId)) {
        user.completed.push(lessonId);
      }
      // Store challenge submission
      user.challenges.push({ lessonId, code, timestamp: new Date().toISOString() });
      saveData(data);

      return sendJSON(res, 200, { success: true, progress: { completed: user.completed.length } });
    }

    // Admin: list all users
    if (pathname === '/api/admin/users' && req.method === 'GET') {
      const data = loadData();
      const users = Object.values(data.users).map(u => ({
        username: u.username,
        completed: u.completed.length,
        createdAt: u.createdAt
      }));
      return sendJSON(res, 200, { users });
    }

    // Health check
    if (pathname === '/api/health') {
      return sendJSON(res, 200, { status: 'ok', users: Object.keys(loadData().users).length });
    }

    sendJSON(res, 404, { error: 'Not found' });
  } catch (e) {
    console.error(e);
    sendJSON(res, 500, { error: e.message });
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`BlazeWebGuide API server running on port ${PORT}`);
});
