import { render, screen } from '@testing-library/react';

import { FormDate } from './FormDate';
import React from 'react';

describe('FormDate', () => {
  it('should have heading "Date"', () => {
    render(
      <FormDate
        value={undefined}
        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('heading')).toHaveTextContent(/Date/i);
  });
});
