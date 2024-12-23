
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  age: Number,
  medicalHistory: String,
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
});

module.exports = mongoose.model('Patient', patientSchema);
