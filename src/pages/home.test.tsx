import { render, screen } from '@testing-library/react';

import { Home } from './Home';

describe('Home', () => {
  it('should have "home"', () => {
    render(<Home />);
    expect(screen.queryByTestId('home')).not.toBeInTheDocument();
  });
});
