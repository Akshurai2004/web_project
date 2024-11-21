
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({  patientName: {
  type: String,
  required: true
},
  doctorName: { type: String, required: true },
  appointmentTime: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
