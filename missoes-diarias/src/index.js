import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MissaoProvider } from './context/MissaoContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MissaoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MissaoProvider>
  </React.StrictMode>
);
