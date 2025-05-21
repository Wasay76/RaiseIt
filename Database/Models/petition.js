const mongoose = require('mongoose');

const petitionSchema = new mongoose.Schema({
    petitionNumber: {
        type: Number,
        required: [true, 'Please give a PetNumber']
    },
    title: {
        type: String,
        required: [true, 'Please give a Title'],
    },
    members: {
        type: [Object],
        required: true
    }
});

module.exports = mongoose.model('petition', petitionSchema);