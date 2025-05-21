const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  billNumber: { type: String, required: true },
  title: { type: String, required: true },
  sponsors: [String],
  year: { type: Number, required: true },
  session: { type: String, required: true },
});

// Create a composite unique index on `billNumber` and `session`
BillSchema.index({ billNumber: 1, session: 1 }, { unique: true });

module.exports = mongoose.model('Bill', BillSchema);
