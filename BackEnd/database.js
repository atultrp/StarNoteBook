const mongoose = require("mongoose");

// Connection from mongodb campass

// const mongoURI = "mongodb://localhost:27017/starnotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// Mongodb connection function
// const connectToMongo = ()=> {
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully!");
//     })
// }

// Connection from mongodb atlas

// const mongoURI = "mongodb+srv://atultrp:atultrp@cluster0.zgqyz.mongodb.net/StarNotebookDatabase?retryWrites=true&w=majority";

const mongoURI = require("./config/keys");

const connectToMongo = async () => {
    await mongoose.connect(mongoURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log("Database Connection successfull!!");
    }).catch((err) => {
        console.log("Database Connection failed!!");
    })
}


module.exports = connectToMongo;