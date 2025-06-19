// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App.jsx'; // Make sure this path is correct for App.jsx

// FIX: Removed or commented out the import for index.css
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
