const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true,
}))

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static('./app/public'))
app.use(fileUpload());

app.set('view engine', 'ejs');
app.set('views', './app/views');

// local host
const http = require('http');
const port = 8000;
const httpServer = http.createServer(app);

require('./app/routs/core')(app);

httpServer.listen(port, () => {
  console.log("Server ok. Port " + port);
})