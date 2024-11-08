// src/App.js

import React, { useState } from 'react';
import './BlogPage.css';
import BlogList from '../components/BlogList';
import HospitalInfo from '../components/HospitalInfo';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>Latest Blogs</h1>
      </header>

      {/* Blog Section */}
      <main>
        <BlogList />
        <HospitalInfo />
      </main>
    </div>
  );
}

export default App;