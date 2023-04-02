import { render, screen } from '@testing-library/react';

import { Home } from './Home';
import React from 'react';

describe('Home', () => {
  it('should have "home"', () => {
    render(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
