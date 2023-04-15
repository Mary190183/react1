import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from '../AppRoutes';
import React from 'react';
import { store } from '../store';

const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
