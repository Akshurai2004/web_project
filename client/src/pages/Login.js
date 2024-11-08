import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('Patient');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Perform login API request
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        // Login successful, handle user session
        console.log('Login successful:', data.message);
        // Redirect to appropriate dashboard based on user role
        if (role === 'Patient') {
          window.location.href = '/patient-dashboard';
        } else if (role === 'Doctor') {
          window.location.href = '/doctor-dashboard';
        }
      } else {
        // Login failed, display error message
        console.error('Login failed:', data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleSignup = async () => {
    try {
      // Perform sign-up API request
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        // Sign-up successful, handle user session
        console.log('Sign-up successful:', data.message);
        // Redirect to appropriate dashboard based on user role
        if (role === 'Patient') {
          window.location.href = '/patient-dashboard';
        } else if (role === 'Doctor') {
          window.location.href = '/doctor-dashboard';
        }
      } else {
        // Sign-up failed, display error message
        console.error('Sign-up failed:', data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error('An error occurred during sign-up:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <h2 className="login-title">Login to Your Account</h2>
        {/* User Role Dropdown */}
        <select
          className="login-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Patient</option>
          <option>Doctor</option>
        </select>
        {/* Username Field */}
        <input
          type="text"
          placeholder="Enter your username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* Password Field */}
        <input
          type="password"
          placeholder="Enter your password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Login Button */}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        {/* Sign Up Link */}
        <a href="#" className="signup-link" onClick={handleSignup}>
          Don't have an account? Sign Up
        </a>
      </div>
    </div>
  );
};

export default Login;