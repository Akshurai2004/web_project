const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.post('/add', billingController.addBilling); 
router.get('/latest', billingController.getLatestExpenditureByName); 

module.exports = router;
