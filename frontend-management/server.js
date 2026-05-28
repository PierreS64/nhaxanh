const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const BACKEND_URL = 'http://localhost:3000';

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // 1. Proxy API requests (starting with /api/) to the backend
  if (req.url.startsWith('/api/')) {
    const backendPath = req.url.slice(4); // Remove "/api" prefix (leaves "/auth/login", "/users", etc.)
    let targetUrl;
    try {
      targetUrl = new URL(backendPath, BACKEND_URL);
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid proxy URL' }));
      return;
    }

    // Extract backend host and port
    const backendUrlObj = new URL(BACKEND_URL);

    // Prepare proxy request options
    const options = {
      hostname: backendUrlObj.hostname,
      port: backendUrlObj.port || (backendUrlObj.protocol === 'https:' ? 443 : 80),
      path: backendPath,
      method: req.method,
      headers: {
        ...req.headers,
        // Override host header to match backend host
        host: backendUrlObj.host,
      }
    };

    // Forward request
    const proxyReq = http.request(options, (proxyRes) => {
      // Forward headers and status
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
      console.error('Proxy Error:', err.message);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Proxy failed to reach NestJS backend', details: err.message }));
    });

    req.pipe(proxyReq);
    return;
  }

  // 2. Serve static files
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  const ext = path.extname(filePath);
  
  // Basic security check (prevent directory traversal)
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routing if no file extension, else 404
      if (ext === '') {
        filePath = path.join(__dirname, 'index.html');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
      }
    }

    const contentType = MIME_TYPES[path.extname(filePath)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`Nhà Xanh Management Frontend running at:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`Proxying /api/* calls to NestJS Backend at:`);
  console.log(`👉 ${BACKEND_URL}`);
  console.log(`==================================================`);
});
