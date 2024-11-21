// backend/server.js
const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');  // Adjust the path as necessary

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(''))
  .catch((err) => console.log('MongoDB connection error:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
