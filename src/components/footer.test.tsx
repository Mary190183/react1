import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('should have link with text "Mary190183"', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Mary190183/i })).toBeInTheDocument();
  });
});