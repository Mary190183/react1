import { render, screen } from '@testing-library/react';

import Card from './card';
import React from 'react';

describe('Card', () => {
  it('should have "card"', () => {
    render(
      <Card id={0} climate={''} img={''} common={''} latin={''} family={''} categories={''} />
    );
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
