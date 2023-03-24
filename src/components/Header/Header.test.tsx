import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  it('should have NavLink "Recycle"', () => {
    render(<Header />);
    screen.getByText('/Recycle/i', { selector: 'NavLink' });
  });
});
