import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = ({ onLogin }) => {
  const [role, setRole] = useState('Patient');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Add this hook for navigation

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
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', role); // Save role for future reference
        
        // First update the login state
        if (role === 'Doctor') {
          await onLogin();  // Ensure this completes before navigation
        }
        
        // Then navigate using React Router
        if (role === 'Patient') {
          navigate('/Appointment');
        } else if (role === 'Doctor') {
          navigate('/doctor');  // Make sure this matches your route configuration
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