import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
// import Services from './pages/Services';
// import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
