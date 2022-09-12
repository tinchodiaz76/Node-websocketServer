/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(8080)
*/

const Server= require('./model/server');

const app= new Server()

app.listen();