const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// RCE
wss.on('connection', ws => {
  ws.on('message', msg => {
    // Removed eval to prevent RCE; implement specific handlers instead
    ws.send('Received: ' + msg);
  });
});

console.log('WS vuln on port 8080');
