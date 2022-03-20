import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './context/UserProvider.js';
import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path = '/' element = { <UserProvider><App /></UserProvider> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


