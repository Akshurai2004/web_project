import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
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

      // If doctor login is successful, call onLogin
      if (userType === 'doctor') {
        onLogin(); // This sets isDoctorLoggedIn to true
      }

      // Redirect based on user type
      switch(userType) {
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

  // Rest of the component remains the same...

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome back!</h2>
        <p>Enter your Credentials to access your account</p>
        <form onSubmit={handleLogin}>
          {/* User Type Selection */}
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
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit">Login</button>
        </form>
        <div className="or-divider">
          <span>Or</span>
        </div>
        <div className="social-login">
          <button>
            <img src="google-icon.png" alt="Google" />
            Sign in with Google
          </button>
          <button>
            <img src="apple-icon.png" alt="Apple" />
            Sign in with Apple
          </button>
        </div>
        <div className="signup">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;