import { render, screen } from '@testing-library/react';

import FormFile from './FormFile';
import React from 'react';

describe('FormFile', () => {
  it('should have heading "Waste image:"', () => {
    render(
      <FormFile
        value={undefined}
        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('heading')).toHaveTextContent(/Waste image:/i);
  });
});
