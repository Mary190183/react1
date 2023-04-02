import { render, screen } from '@testing-library/react';

import FormDate from './FormDate';

describe('FormDate', () => {
  it('should have heading "Date"', () => {
    render(<FormDate />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Date/i);
  });
});
