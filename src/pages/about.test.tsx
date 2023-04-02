import { render, screen } from '@testing-library/react';

import { About } from './About';
import React from 'react';

describe('About', () => {
  it('should have "Grow your home!" text', () => {
    render(<About />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Grow your home!/i);
  });
});
