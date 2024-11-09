import React from 'react';
import './Home.css';
import homeImage from './Home-1.jpg'; // Import the image file
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-image-container">
        <img src={homeImage} alt="Home" className="home-image" />
      </div>
      <div className="home-content">
        <h1>APPOLO HOSPITALS</h1>
        <p>For Adults and Children</p>
        <Link to="/About" className="book-link">
          <button className="book-button">Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;