const express = require('express');
const morgan = require('morgan')
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

module.exports = app;
