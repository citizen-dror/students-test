const express = require('express');
const db = require('./database');
var bodyParser = require('body-parser')
const studetnsRoute = require('./components/students/students_api');
const citiesRoute = require('./components/cities/cities_api');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

citiesRoute(app);
studetnsRoute(app);

module.exports = app;
