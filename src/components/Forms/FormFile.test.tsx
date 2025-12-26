import { render, screen } from '@testing-library/react';

import FormFile from './FormFile';

describe('FormFile', () => {
  it('should have heading "Waste image:"', () => {
    render(<FormFile />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Waste image:/i);
  });
});
