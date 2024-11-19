import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient'); // Default role is 'patient'

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Placeholder for login logic (e.g., API call)
    const isLoginSuccessful = email === 'patient@example.com' && password === 'password123';

    if (isLoginSuccessful) {
      alert('Login successful!');
      // Navigate based on selected role
      if (role === 'patient') {
        navigate('/appointment');
      } else {
        alert('Welcome, Doctor!');
      }
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome back!</h2>
        <p>Enter your Credentials to access your account</p>
        <form onSubmit={handleLogin}>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc' }} // Inline styling for dropdown
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Don’t have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;