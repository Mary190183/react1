import { render, screen } from '@testing-library/react';

import { ButtonForm } from './ButtonForm';
import React from 'react';

describe('ButtonForm', () => {
  it('should have button', () => {
    render(
      <ButtonForm
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByTestId('button-form')).toBeInTheDocument();
  });
});
