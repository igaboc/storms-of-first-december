// Ensure we have the connection to the database
const mongoose = require('./init')
// const City = require('./city')
// var mongooseCity = require('mongoose')
// , Schema = mongooseCity.Schema

// Define our model
const Rainfall = mongoose.model('Rainfall', { 
    date: {
        type: Date,
        required: false,
        unique: false,
        default: Date.now
    },
    amount: {
        type: Number
        // required: true
    },
    city: {
        type: String
    }
});

module.exports = Rainfall