import React from 'react';
import Auth from './components/Auth.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className = 'app-wrap'>
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;
