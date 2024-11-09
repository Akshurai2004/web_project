// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login route
router.post('/login', authController.login);
// Register route (for future use)
router.post('/register', authController.register);

module.exports = router;