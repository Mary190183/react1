import { render, screen } from '@testing-library/react';

import { FormCard } from './FormCard';
import React from 'react';

describe('FormCard', () => {
  it('should have "form-card"', () => {
    render(
      <FormCard
        deleteCard={function (): void {
          throw new Error('Function not implemented.');
        }}
        id={0}
        title={''}
        select={''}
        file={undefined}
        date={''}
        check={false}
        radio={''}
        submit={false}
      />
    );
    expect(screen.getByTestId('form-card')).toBeInTheDocument();
  });
});
