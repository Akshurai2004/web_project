// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const config = require('../config');

const authController = {
    login: async (req, res) => {
        try {
            const { username, password, role } = req.body;

            // Determine which model to use based on role
            const Model = role === 'Doctor' ? Doctor : Patient;

            // Find user by username
            const user = await Model.findOne({ username });
            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Verify password
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Create JWT token
            const token = jwt.sign(
                { 
                    userId: user._id, 
                    role: role,
                    username: user.username 
                },
                config.jwtSecret,
                { expiresIn: '24h' }
            );

            // Send response
            res.status(200).json({
                message: 'Login successful',
                token,
                user: {
                    id: user._id,
                    username: user.username,
                    role: role
                }
            });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    register: async (req, res) => {
        try {
            const { username, password, role, ...additionalData } = req.body;

            // Determine which model to use based on role
            const Model = role === 'Doctor' ? Doctor : Patient;

            // Check if user already exists
            const existingUser = await Model.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: 'Username already exists' });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            const newUser = new Model({
                username,
                password: hashedPassword,
                ...additionalData
            });

            await newUser.save();

            res.status(201).json({ message: 'Registration successful' });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
};

module.exports = authController;