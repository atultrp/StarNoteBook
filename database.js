const mongoose = require("mongoose");
require('custom-env').env(true);


// Connection from mongodb campass

// const mongoURI = "mongodb://localhost:27017/starnotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// Mongodb connection function
// const connectToMongo = ()=> {
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully!");
//     })
// }

// Connection from mongodb atlas


const mongoURI = "mongodb+srv://atultrp:atanki@cluster0.zgqyz.mongodb.net/StarNotebookDatabase?retryWrites=true&w=majority";

const test = process.env.MONGO_ATLAS_PW;

const connectToMongo = async () => {
    await mongoose.connect(mongoURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log(`${test}`);
    console.log("Database Connection successfull!!");
}


module.exports = connectToMongo;