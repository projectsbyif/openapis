// Lightweight static preview server for the generated `public/` folder.
// Mirrors how the site is served in production: absolute asset paths like
// /css/app.css resolve from the site root, and clean URLs such as
// /about-this-research map to that folder's index.html.
//
// Dependency-free (Node built-ins only). Run via `npm run serve`, or
// `npm run preview` to rebuild assets + pages first.

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'public');
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain; charset=utf-8',
};

function send(res, status, body, headers) {
  res.writeHead(status, headers || {});
  res.end(body);
}

const server = http.createServer(function(req, res) {
  // Strip query string and decode, then prevent path traversal.
  const reqPath = decodeURIComponent(req.url.split('?')[0]);
  const safePath = path.normalize(path.join(ROOT, reqPath));
  if (!safePath.startsWith(ROOT)) {
    return send(res, 403, 'Forbidden');
  }

  fs.stat(safePath, function(err, stat) {
    let filePath = safePath;

    // Directories (and clean URLs like /about-this-research) → index.html
    if (!err && stat.isDirectory()) {
      filePath = path.join(safePath, 'index.html');
    } else if (err) {
      // No exact file: try treating it as a directory with an index.html
      filePath = path.join(safePath, 'index.html');
    }

    fs.readFile(filePath, function(readErr, data) {
      if (readErr) {
        return send(res, 404, 'Not found: ' + reqPath);
      }
      const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
      send(res, 200, data, { 'Content-Type': type });
    });
  });
});

server.on('error', function(err) {
  if (err.code === 'EADDRINUSE') {
    console.error('\nPort ' + PORT + ' is already in use.');
    console.error('Stop the other server, or pick another port: PORT=3000 npm run serve\n');
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, HOST, function() {
  console.log('Previewing public/ at http://' + HOST + ':' + PORT + '/');
  console.log('Press Ctrl-C to stop.');
});
