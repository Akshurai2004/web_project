import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    console.log('Signing up with username:', username, 'email:', email, 'and password:', password);

    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
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
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Get Started Now</h2>

        <input
          type="text"
          placeholder="Name"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email address"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="terms-container">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree to the terms & policy</label>
        </div>

        <button className="signup-button" onClick={handleSignup}>
          Signup
        </button>

        <div className="signup-or">
          <span>Or</span>
        </div>

        <div className="social-buttons">
          <button className="google-button">Sign in with Google</button>
          <button className="apple-button">Sign in with Apple</button>
        </div>

        <p className="signin-link">
          Have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;