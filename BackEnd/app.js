var util= require('util');
var encoder = new util.TextEncoder('utf-8');

const connectToMongo = require("./database");
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Heya World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})