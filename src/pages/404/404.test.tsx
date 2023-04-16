import { render, screen } from '@testing-library/react';

import { NotFoundPage } from './404';

describe('NotFoundPage', () => {
  it('should have "Houseplant" text', () => {
    render(<NotFoundPage />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Houseplant/i);
  });
});
