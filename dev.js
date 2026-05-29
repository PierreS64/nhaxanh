const { spawn, execSync } = require('child_process');
const path = require('path');
const http = require('http');
const fs = require('fs');

function printLinks() {
  console.log('\n\x1b[36m%s\x1b[0m', '==================================================');
  console.log('\x1b[36m%s\x1b[0m', '🚀 NHÀ XANH DEVELOPMENT SERVICES ARE RUNNING');
  console.log('\x1b[36m%s\x1b[0m', '==================================================');
  console.log(`👉 Tenant Frontend:      \x1b[32mhttp://localhost:5001\x1b[0m`);
  console.log(`👉 Management Frontend:  \x1b[32mhttp://localhost:5000\x1b[0m`);
  console.log(`👉 NestJS Backend API:   \x1b[32mhttp://localhost:3000\x1b[0m`);
  console.log('\x1b[36m%s\x1b[0m', '==================================================\n');
}

console.log('==================================================');
console.log('Starting Nhà Xanh Development Suite...');
console.log('==================================================');

const backendDir = path.join(__dirname, 'backend');

// 1. Auto-create .env if missing
const envPath = path.join(backendDir, '.env');
const envExamplePath = path.join(backendDir, '.env.example');
if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  console.log('[Backend] .env file not found. Copying from .env.example...');
  try {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('[Backend] .env file created successfully!');
  } catch (err) {
    console.error('[Backend] Failed to copy .env file:', err);
  }
}

// 2. Auto-run npm install in backend if node_modules is missing
if (!fs.existsSync(path.join(backendDir, 'node_modules'))) {
  console.log('[Backend] node_modules not found. Running "npm install" in backend directory... This may take a moment.');
  try {
    execSync('npm install', { cwd: backendDir, stdio: 'inherit', shell: true });
    console.log('[Backend] "npm install" completed successfully!');
  } catch (err) {
    console.error('[Backend] Failed to run "npm install". Please check your node/npm installation and internet connection.', err);
    process.exit(1);
  }
}

// 3. Start Backend (NestJS)
console.log('[Backend] Starting NestJS in watch mode...');
const backend = spawn('npm', ['run', 'start:dev'], {
  cwd: backendDir,
  shell: true,
  stdio: 'pipe',
  env: { ...process.env, FORCE_COLOR: 'true' }
});

let stdoutBuffer = '';
const handleStream = (stream, outputStream) => {
  stream.on('data', (data) => {
    const str = data.toString();
    const cleaned = str
      .replace(/\x1b\[2J/g, '')
      .replace(/\x1b\[3J/g, '')
      .replace(/\x1b\[H/g, '')
      .replace(/\x1bc/g, '');

    outputStream.write(cleaned);

    stdoutBuffer = (stdoutBuffer + cleaned).slice(-100);
    if (stdoutBuffer.includes('Nest application successfully started')) {
      stdoutBuffer = '';
      printLinks();
    }
  });
};

handleStream(backend.stdout, process.stdout);
handleStream(backend.stderr, process.stderr);

// 4. Start Management Frontend
const managementDir = path.join(__dirname, 'frontend-management');
console.log(`[Management] Starting Dashboard Server at ${managementDir}...`);
const management = spawn('node', ['server.js'], {
  cwd: managementDir,
  shell: true,
  stdio: 'inherit'
});

// 5. Serve Tenant Frontend on Port 5001
const frontendDir = path.join(__dirname, 'frontend');
const PORT = 5001;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const frontendServer = http.createServer((req, res) => {
  let filePath = path.join(frontendDir, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  const ext = path.extname(filePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      if (ext === '') {
        filePath = path.join(frontendDir, 'index.html');
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

frontendServer.listen(PORT, () => {
  printLinks();
});

// Handle termination signals
const cleanUp = () => {
  console.log('\nStopping all services...');
  backend.kill();
  management.kill();
  frontendServer.close();
  process.exit();
};

process.on('SIGINT', cleanUp);
process.on('SIGTERM', cleanUp);
