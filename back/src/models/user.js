const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String 
    
});


const userModel = mongoose.model('user', userSchema, 'user')

module.exports = userModel