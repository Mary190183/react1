import { render, screen } from '@testing-library/react';

import FormCheckbox from './FormCheckbox';

describe('FormCheckbox', () => {
  it('should have input type checkbox', () => {
    render(<FormCheckbox />);
    expect(screen.getByTestId('input-checkbox')).toBeInTheDocument();
  });
});
