import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/partials/core.scss'
import "./styles/globals.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

