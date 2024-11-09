// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Services from './pages/services';
import BlogPage from './pages/BlogPage';
import Signup from './pages/Signup';
import Doctor from './pages/Doctor';
import Billing from './pages/Billing';
function App() {
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(false);

  const handleDoctorLogin = () => {
    setIsDoctorLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleDoctorLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/doctor"
            element={isDoctorLoggedIn ? <Doctor /> : <Navigate to="/login" />}
          />
          <Route path="/billing" element={<Billing />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
