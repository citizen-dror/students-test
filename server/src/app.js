const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const db = require('./database');
const bodyParser = require('body-parser')

const studetnsRoute = require('./components/students/students_api');
const citiesRoute = require('./components/cities/cities_api');
const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

citiesRoute(app);
studetnsRoute(app);

// if not find - navigate in react
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../build/static')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use((req, res) => {
  console.info(`404 - ${req.originalUrl}`, req.body);
  res.status(404).send('The url you requested cannot be found.');
});
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  console.error(error.stack);
  return res.status(500).send('Unknown Error in the server');
});

module.exports = app;
