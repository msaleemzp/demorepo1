const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// RCE
wss.on('connection', ws => {
  ws.on('message', msg => {
    // Disabled eval() to eliminate RCE risk
    // TODO: replace with a safe command handler if needed
    ws.send('Message received: ' + msg);
  });
});

console.log('WS vuln on port 8080');
