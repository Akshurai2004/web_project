// client/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // Fallback to localhost if REACT_APP_API_URL is not defined
});

export default api;
