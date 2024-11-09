require('dotenv').config();  // Load the .env file for the backend

module.exports = {
  mongoURI: process.env.MONGO_URI,  // MongoDB URI from the .env
  jwtSecret: process.env.JWT_SECRET,  // Secret key for JWT
};
