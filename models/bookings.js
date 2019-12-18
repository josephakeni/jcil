let mongoose = require('mongoose');

//Bookings schema
let bookingSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }

});

let Bookings = module.exports = mongoose.model('Bookings', bookingSchema);