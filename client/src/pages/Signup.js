import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [role, setRole] = useState('Patient');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Placeholder for backend API call
        console.log('Signing up with role:', role, 'username:', username, 'email:', email, 'and password:', password);
    };

    return (
        <div className="signup-section">
            <div className="signup-container">
                <h2 className="signup-title">Create Your Account</h2>

                {/* User Role Dropdown */}
                <select
                    className="signup-select"
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
                    className="signup-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* Email Field */}
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="signup-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password Field */}
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="signup-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Sign Up Button */}
                <button className="signup-button" onClick={handleSignup}>
                    Sign Up
                </button>

                {/* Login Link */}
                <a href="/login" className="login-link">
                    Already have an account? Login
                </a>
            </div>
        </div>
    );
};

export default Signup;