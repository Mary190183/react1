import { render, screen } from '@testing-library/react';

import { FormCard } from './FormCard';
import React from 'react';

describe('FormCard', () => {
  it('should have "form-card"', () => {
    render(
      <FormCard
        deleteCard={function (id: number): void {
          throw new Error('Function not implemented.');
        }}
        id={0}
        title={''}
        select={''}
        file={''}
        date={''}
        check={false}
        radio={''}
      />
    );
    expect(screen.getByTestId('form-card')).toBeInTheDocument();
  });
});
