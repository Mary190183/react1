import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from '../AppRoutes';
import React from 'react';
import { store } from '../store';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
