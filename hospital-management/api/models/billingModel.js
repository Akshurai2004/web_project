const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  doctorName: { type: String, required: true },
  expenditure: { type: Number, required: true },
  type: { type: String, enum: ['insurance', 'billing'], required: true },
});

module.exports = mongoose.model('Billing', billingSchema);
