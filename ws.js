const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// RCE
wss.on('connection', ws => {
  ws.on('message', msg => {
    // Removed insecure eval to prevent RCE
    ws.send('Received: ' + msg);
  });
});

console.log('WS vuln on port 8080');
