const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.post('/add', billingController.addBilling); // Route for adding billing/insurance data
router.get('/latest', billingController.getLatestExpenditureByName); // Rename and update the function

module.exports = router;
