const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients' });
  }
};

// Get a specific patient by ID
exports.getPatient = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patient details' });
  }
};

// Get a patient by name
exports.getPatientByName = async (req, res) => {
  const { name } = req.query;
  try {
    const patient = await Patient.findOne({ name });
    if (patient) {
      res.status(200).json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patient data' });
  }
};


exports.addAppointment = async (req, res) => {
  const { patientName, doctorName, appointmentTime } = req.body;

  try {
    // Validate request body
    if (!patientName || !doctorName || !appointmentTime) {
      return res.status(400).json({ 
        message: 'Missing required fields: patientName, doctorName, and appointmentTime are required' 
      });
    }

    // Check for existing appointment at the same time
    const existingAppointment = await Appointment.findOne({
      doctorName,
      appointmentTime: new Date(appointmentTime)
    });

    if (existingAppointment) {
      return res.status(409).json({ 
        message: 'This time slot is already booked with this doctor' 
      });
    }

    // Create new appointment
    const appointment = new Appointment({
      patientName,
      doctorName,
      appointmentTime: new Date(appointmentTime)
    });

    // Save the appointment
    await appointment.save();

    // Find the patient to associate the appointment
    const patient = await Patient.findOne({ name: patientName });
    if (patient) {
      patient.appointments.push(appointment._id);
      await patient.save();
    }

    res.status(201).json({
      message: 'Appointment booked successfully',
      appointment
    });

  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ 
      message: 'Error booking appointment', 
      error: error.message 
    });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    // If patientName is provided, get appointments for that patient
    if (req.query.patientName) {
      const appointments = await Appointment.find({
        patientName: req.query.patientName
      }).sort({ appointmentTime: 1 });
      
      return res.status(200).json(appointments);
    }

    // Otherwise return all appointments
    const appointments = await Appointment.find()
      .sort({ appointmentTime: 1 });
    
    res.status(200).json(appointments);

  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ 
      message: 'Error fetching appointments', 
      error: error.message 
    });
  }
};

exports.cancelAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Also remove the appointment reference from the patient
    const patient = await Patient.findOne({ name: appointment.patientName });
    if (patient) {
      patient.appointments = patient.appointments.filter(
        appointmentId => appointmentId.toString() !== id
      );
      await patient.save();
    }

    res.status(200).json({ message: 'Appointment cancelled successfully' });

  } catch (error) {
    console.error('Error cancelling appointment:', error);
    res.status(500).json({ 
      message: 'Error cancelling appointment', 
      error: error.message 
    });
  }
};