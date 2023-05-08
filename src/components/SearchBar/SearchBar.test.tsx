import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('SearchBar', () => {
  it('should have button', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByTestId('button-search')).toBeInTheDocument();
  });
});
