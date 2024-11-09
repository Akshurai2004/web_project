import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [role, setRole] = useState('Patient');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    console.log('Signing up with role:', role, 'username:', username, 'email:', email, 'and password:', password);

    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        role,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful!');
    } else {
      alert(data.message || 'Signup failed!');
    }
  };

  return (
    <div className="signup-section">
      <div className="signup-container">
        <h2 className="signup-title">Create Your Account</h2>

        <select
          className="signup-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Patient</option>
          <option>Doctor</option>
        </select>

        <input
          type="text"
          placeholder="Enter your username"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>

        <a href="/login" className="login-link">Already have an account? Login</a>
      </div>
    </div>
  );
};

export default Signup;
