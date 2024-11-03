const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const { mongoUri } = require('./config');

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));



app.use('/api/auth', authRoutes);
app.use('/api', patientRoutes); // Add more routes as needed

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
// Example Route
app.get('/', (req, res) => {
  res.send('Hospital Management System API is running!');
});

module.exports = app;