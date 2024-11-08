const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password, email, role } = req.body;

  console.log("Received login request with:", { username, password, email, role });

  // Check for required fields
  // if (!username || !password || !email ) {
  //   return res.status(400).json({ message: "All fields are required" });
  // }

  try {
    let user = await User.findOne({ username });
    console.log("User found:", user);

    if (!user) {
      console.log("User does not exist, creating a new user.");
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ username, password: hashedPassword, email, role });
      await user.save();
      console.log("New user created:", user);
      return res.status(201).json({ message: 'User registered successfully' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json({ message: 'Server error', error: error.message || error });
  }
});

module.exports = router;
