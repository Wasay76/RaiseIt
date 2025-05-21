const mongoose = require('mongoose');

const MPPSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  riding: { type: String, required: true },
  party: { type: String, required: true },
  link: { type: String, required: true },
}, { collection: 'mpps' }); // 👈 Forces Mongoose to use 'mpps'

module.exports = mongoose.model('MPP', MPPSchema);
