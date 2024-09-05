import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS
import App from './App'; // Main App component
import { BrowserRouter as Router } from 'react-router-dom'; // For routing

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
