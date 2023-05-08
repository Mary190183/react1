import { render, screen } from '@testing-library/react';

import { Recycle } from './recycle';
import React from 'react';
import { store } from '../../store';
import { Provider } from 'react-redux';

describe('Recycle', () => {
  it('should have "button-form"', () => {
    render(
      <Provider store={store}>
        <Recycle />
      </Provider>
    );
    expect(screen.getByTestId('button-form')).toBeInTheDocument();
  });
});
