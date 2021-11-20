const mongoose = require("mongoose");
const { Schema } = mongoose;

// Creating scheme for the user to login/regiter in the StarNotebook
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Creating model of the user to use for authentication
const User = mongoose.model('user',userSchema);
User.createIndexes();
module.exports = User;