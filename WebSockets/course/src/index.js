import express from 'express';
import http from "http";

const app = express();
const server = http.Server(app);

app.get('/', (req, res) => {
  res.json({status: true});
})

app.get('/test', (req, res) => {
  res.send("Lesson about socket");
})

server.listen(8000, () => {
  console.log("What about it?");
})