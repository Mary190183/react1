import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

// createRoot(document.getElementById('root') as HTMLElement).render(<App />);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
