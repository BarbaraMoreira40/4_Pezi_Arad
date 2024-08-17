import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; 
import reportWebVitals from './reportWebVitals.js'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você estiver usando a função reportWebVitals
reportWebVitals();
