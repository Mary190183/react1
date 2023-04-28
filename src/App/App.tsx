import { Provider } from 'react-redux';
import { AppRoutes } from '../AppRoutes';
import React from 'react';
import { store } from '../store';

const App: React.FC = () => {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
    // </React.StrictMode>
  );
};

export default App;
