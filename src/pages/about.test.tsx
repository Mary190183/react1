import { render, screen } from '@testing-library/react';

import { About } from '../pages/about';

describe('About', () => {
  it('should have "Grow your home!" text', () => {
    render(<About />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Grow your home!/i);
  });
});
