const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
    name: String,
    description: String,
    confirmed: [String],
    date: String,
    address: String
});


const eventModel = mongoose.model('event', eventSchema, 'event')

module.exports = eventModel