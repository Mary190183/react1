import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should have button', () => {
    render(<SearchBar />);
    expect(screen.getByTestId('button-search')).toBeInTheDocument();
  });
});
