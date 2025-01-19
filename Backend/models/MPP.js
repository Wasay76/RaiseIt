const mongoose = require('mongoose');

const mppSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please give a firstName']
    },
    lastName: {
        type: String,
        required: [true, 'Please give a lastName'],
    },
    currentRoles: {
        type: [String],
        required: true
    },
    bills: {
        type: [Number],  // Array of numbers
        required: true
    },
    location:{
        type: String,
        required: true
    },
    party:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('MPP', mppSchema);