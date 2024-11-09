// Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [role, setRole] = useState('Patient');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data.message);
        if (role === 'Patient') {
          window.location.href = '/patient-dashboard';
        } else if (role === 'Doctor') {
          onLogin(); // Call onLogin to set doctor login state
          window.location.href = '/doctor-dashboard'; // Navigate to doctor dashboard
        }
      } else {
        console.error('Login failed:', data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <h2 className="login-title">Login to Your Account</h2>

        <select
          className="login-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Patient</option>
          <option>Doctor</option>
        </select>

        <input
          type="text"
          placeholder="Enter your username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>

        <a href="/signup" className="signup-link">
          Don't have an account? Sign Up
        </a>
      </div>
    </div>
  );
};

export default Login;
