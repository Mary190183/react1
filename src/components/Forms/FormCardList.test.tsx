import { render, screen } from '@testing-library/react';

import { FormCardList } from './FormCardList';
import React from 'react';

describe('FormCardList', () => {
  it('should have "container-form-card"', () => {
    render(
      <FormCardList
        items={[]}
        deleteCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByTestId('container-form-card')).toBeInTheDocument();
  });
});
