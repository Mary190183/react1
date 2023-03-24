import { render, screen } from '@testing-library/react';

import FormTitle from './FormTitle';

describe('FormTitle', () => {
  it('should have heading "Title"', () => {
    render(<FormTitle />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Title/i);
  });
});
