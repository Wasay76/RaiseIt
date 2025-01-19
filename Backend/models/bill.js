const mongoose = require('mongoose')

const billSchema = new mongoose.Schema({
    BillNumber:{
        type: Number,
        required: [true, "Please give a Number"]
    },
    Bill:{
        type: String,
        required: [true, 'Please give a Bill']
    },
    Link:{
        type: String,
        required: [true, 'Please give a link'],
    },
    SubCat:{
        type: Array
    },
    Abstract:{
        type: String
    },
    ShortDesc:{
        type: String
    }
})

module.exports = mongoose.model('Bill', billSchema)