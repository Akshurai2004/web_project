import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import LogoImage from './logo.jpg';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={LogoImage} alt="Home" className="logo-1" />
      </div>
      <div className="nav-links">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;