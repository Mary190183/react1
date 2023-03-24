import { render, screen } from '@testing-library/react';

import { Layout } from './Layout';

describe('Layout', () => {
  it('should have "wrapper"', () => {
    render(<Layout />);
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });
});
