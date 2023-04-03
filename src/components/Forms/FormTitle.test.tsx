import { render, screen } from '@testing-library/react';

import FormTitle from './FormTitle';
import React from 'react';

describe('FormTitle', () => {
  it('should have heading "Title"', () => {
    render(
      <FormTitle
        value={undefined}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('heading')).toHaveTextContent(/Title/i);
  });
});
