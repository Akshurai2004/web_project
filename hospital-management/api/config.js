require('dotenv').config();  

module.exports = {
  mongoURI: process.env.MONGO_URI,  // MongoDB URI from the .env
  jwtSecret: process.env.JWT_SECRET,  // Secret key for JWT
};
