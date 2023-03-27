import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import React from 'react';

class App extends React.Component {
  render = (): JSX.Element => {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );
  };
}

export default App;
