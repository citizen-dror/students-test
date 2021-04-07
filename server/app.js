const express = require('express');
const db = require('./database');
const service_dal = require('./service_dal');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cities', (req, res) => {
    service_dal.get_cities();
    res.send('Hello World!')
  })

app.get('/students', (req, res) => {
    service_dal.get_students();
    res.send('Hello World!')
})


module.exports = app;
