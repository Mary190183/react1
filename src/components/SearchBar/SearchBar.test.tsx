import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';
import React from 'react';

describe('SearchBar', () => {
  it('should have button', () => {
    render(<SearchBar />);
    expect(screen.getByTestId('button-search')).toBeInTheDocument();
  });
});
