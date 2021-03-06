const express = require('express');
const http = require('http');

const models = require('./models/index.js');
const indexRouter = require('./routes/indexRoute');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

models.sequelize
  .sync()
  .then(() => {
    console.log(' DB 연결 성공');
  })
  .catch((err) => {
    console.log('연결 실패');
    console.log(err);
  });

server.listen(3000, () => {
  console.log('running server!');
});

app.use('', indexRouter);
