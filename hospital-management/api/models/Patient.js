const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicalHistory: [{
    condition: String,
    diagnosis: String,
    treatment: String,
    date: Date
  }],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  insurance: {
    provider: String,
    policyNumber: String,
    coverage: String
  }
});

module.exports = mongoose.model('Patient', patientSchema);