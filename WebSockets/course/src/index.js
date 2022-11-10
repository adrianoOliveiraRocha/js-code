import express from 'express';
import http from "http";
import { Server } from 'socket.io';

const app = express();
app.use(express.static('./app/public'));
app.set('view engine', 'ejs');
app.set('views', './app/views');

const httpServer = http.Server(app);
const io = new Server(httpServer);

io.on('connect', (socket) => {
  socket.on('test', (res) => {
    console.log(res);
  });
})

app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/test', (req, res) => {
  res.send("Lesson about socket");
})

httpServer.listen(8000, () => {
  console.log("Running in the port ", 8000);
})