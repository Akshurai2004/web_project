import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Hospital Logo</div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;