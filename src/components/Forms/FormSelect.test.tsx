import { render, screen } from '@testing-library/react';

import FormSelect from './FormSelect';

describe('FormSelect', () => {
  it('should have heading "Type of waste:"', () => {
    render(<FormSelect />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Type of waste:/i);
  });
});
