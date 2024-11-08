import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/contact" className="footer-link">Contact Us</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/faq" className="footer-link">FAQ</Link>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Hospital Name. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
