import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
//LOGIN.js


const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          userType,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed!');
      }

      const data = await response.json();

      if (userType === 'doctor') {
        onLogin();
      }

      switch (userType) {
        case 'doctor':
          navigate('/doctor');
          break;
        case 'patient':
          navigate('/appointment');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome back!</h2>
        <p className="login-description">Enter your credentials to access your account.</p>
        <form onSubmit={handleLogin}>
          <div className="user-type-select">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-or">
          <span>Or</span>
        </div>
        <div className="social-buttons">
          <button className="google-button">Sign in with Google</button>
          <button className="apple-button">Sign in with Apple</button>
        </div>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;