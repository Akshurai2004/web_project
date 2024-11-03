const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.get('/patients', patientController.getAllPatients);
router.get('/patients/:id', patientController.getPatient);

module.exports = router;