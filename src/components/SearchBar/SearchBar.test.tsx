import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';
import React from 'react';

describe('SearchBar', () => {
  it('should have button', () => {
    render(
      <SearchBar
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        onSubmit={undefined}
        value={undefined}
      />
    );
    expect(screen.getByTestId('button-search')).toBeInTheDocument();
  });
});
