const express = require('express');
const db = require('./database');
const studentsApi = require('./components/students/students_api');
const citiesApi = require('./components/cities/cities_api');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

citiesApi.citiesRoute(app);
studentsApi.studentsRoute(app);

module.exports = app;
