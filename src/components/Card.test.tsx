import { render, screen } from '@testing-library/react';

import Card from './card';
import React from 'react';

describe('Card', () => {
  it('should have "card"', () => {
    render(<Card id={0} name={''} description={''} price={0} watches={0} image={''} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
