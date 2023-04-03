import { render, screen } from '@testing-library/react';

import FormSelect from './FormSelect';
import React from 'react';

describe('FormSelect', () => {
  it('should have heading "Type of waste:"', () => {
    render(
      <FormSelect
        value={undefined}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('heading')).toHaveTextContent(/Type of waste:/i);
  });
});
