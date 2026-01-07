import { render, screen } from '@testing-library/react';

import { About } from './about';
import React from 'react';

describe('About', () => {
  it('should have "Grow your home!" text', () => {
    render(<About />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Grow your home!/i);
  });
});
