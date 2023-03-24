import { render, screen } from '@testing-library/react';

import { Home } from '../pages/home';

describe('Home', () => {
  it('should have "container_home"', () => {
    render(<Home />);
    expect(screen.getByRole('container_home')).toBeInTheDocument();
  });
});
