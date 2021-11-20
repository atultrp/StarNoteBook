const mongoose = require("mongoose");
// Mongodb campus link to store data of user
const mongoURI = "mongodb://localhost:27017/starnotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

// Mongodb connection function
const connectToMongo = ()=> {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully!");
    })
}

module.exports = connectToMongo;