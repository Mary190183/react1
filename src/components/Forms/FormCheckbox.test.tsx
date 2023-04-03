import { render, screen } from '@testing-library/react';

import FormCheckbox from './FormCheckbox';
import React from 'react';

describe('FormCheckbox', () => {
  it('should have input type checkbox', () => {
    render(
      <FormCheckbox
        checked={undefined}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByTestId('input-checkbox')).toBeInTheDocument();
  });
});
