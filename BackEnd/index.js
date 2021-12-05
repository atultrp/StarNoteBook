const connectToMongo = require("./database");
const express = require('express')
var cors = require('cors');

// Connecting the backend to the datebase
connectToMongo();

const app = express();
const port = 4000;

app.use(cors());

// It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

// Available Routes
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));

// For Deployment
if(process.env.NODE_ENV === 'production'){
  const path = require('path')

  app.get('/',(req,res) => {
    app.use(express.static(path.resolve(__dirname,"..","build")))
    res.sendFile(path.resolve(__dirname,"..","build","index.html"))

  })
}


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})