import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import React from 'react';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
