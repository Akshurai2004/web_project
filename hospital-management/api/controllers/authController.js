// backend/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const config = require('../config');
exports.signup = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
      const Model = role === 'Doctor' ? Doctor : Patient;
  
      const existingUser = await Model.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'Username or email already taken' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new Model({ username, email, password: hashedPassword });
      await newUser.save();
  
      // Create and return JWT token
      const token = jwt.sign({ id: newUser._id, role }, config.jwtSecret, { expiresIn: '1h' });
      res.status(201).json({ message: 'Signup successful', token });
    } catch (error) {
      console.log(error);  
      res.status(500).json({ message: 'An error occurred during signup' });
    }
  };
  
exports.login = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    
    const Model = role === 'Doctor' ? Doctor : Patient;

    
    const user = await Model.findOne({ $or: [{ username }, { email: username }] });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }


    const token = jwt.sign({ id: user._id, role }, config.jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred during login' });
  }
};
