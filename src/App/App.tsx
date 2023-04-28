import { Provider } from 'react-redux';
import { AppRoutes } from '../AppRoutes';
import React from 'react';
import { store } from '../store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};
