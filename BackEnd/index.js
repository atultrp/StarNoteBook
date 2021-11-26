const connectToMongo = require("./database");
const express = require('express')

// Connecting the backend to the datebase
connectToMongo();

const app = express();
const port = 4000;

// It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

// Available Routes
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})