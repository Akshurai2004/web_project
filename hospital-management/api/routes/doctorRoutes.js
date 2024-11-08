
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/doctorController');

router.get('/doctors', doctorController.getAllDoctors);
router.get('/doctors/:id', doctorController.getDoctor);

module.exports = router;