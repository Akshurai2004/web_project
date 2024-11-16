const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');  // Ensure this is correctly imported

// Existing routes
router.get('/patients', patientController.getAllPatients);
router.get('/patients/:id', patientController.getPatient);

// New route to get patient by name
router.get('/findByName', patientController.getPatientByName);  // Ensure this function is defined in the controller

// Add an appointment for a patient

router.post('/appointments', patientController.addAppointment);
router.get('/appointments', patientController.getAppointments);
router.delete('/appointments/:id', patientController.cancelAppointment);
module.exports = router;
