const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000?token=123456');
ws.onmessage = (event) => {
  process.stdout.write('\033c');
  let obj = JSON.parse(event.data);
  console.log(obj);
}