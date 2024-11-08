const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const { mongoUri } = require('./config');

// MongoDB connection
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// CORS options
const corsOptions = {
  origin: 'http://localhost:5001', // Allow requests only from frontend
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions)); // CORS should be configured here, before routes
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', patientRoutes);

// Example route
app.get('/', (req, res) => {
  res.send('Hospital Management System API is running!');
});

module.exports = app;
