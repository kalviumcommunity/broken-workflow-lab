const http = require('http');

const port = process.env.PORT || 3000;
const appName = 'Broken Workflow Lab';

const routes = {
  '/status': () => ({
    name: appName,
    status: 'ok',
    timestamp: new Date().toISOString(),
  }),
};

const server = http.createServer((req, res) => {
  const handler = routes[req.url];

  if (handler) {
    const payload = handler();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(payload));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not found' }));
});

server.listen(port, () => {
  console.log(`${appName} listening on http://localhost:${port}`);
});
