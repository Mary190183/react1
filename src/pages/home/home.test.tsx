import { render, screen } from '@testing-library/react';

import { Home } from './home';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Home', () => {
  it('should have "home"', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
