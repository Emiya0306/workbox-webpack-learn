const path = require('path');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.set('Service-Worker-Allowed', '/');
  next();
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.use('/public', express.static(path.join(__dirname, './dist')));

app.listen(8001);