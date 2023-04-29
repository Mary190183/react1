import { render } from '@testing-library/react';
import { AppRoutes } from './AppRoutes';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';

describe('App tests', () => {
  it('renders app', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    );
  });
});
