

import React, { useState } from 'react';
import './BlogPage.css';
import BlogList from '../components/BlogList';
import HospitalInfo from '../components/HospitalInfo';

function App() {
  return (
    <div className="App">
 
      <header className="header">
        <h1>Latest Blogs</h1>
      </header>


      <main>
        <BlogList />
        <HospitalInfo />
      </main>
    </div>
  );
}

export default App;