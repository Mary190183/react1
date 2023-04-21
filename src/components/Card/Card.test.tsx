import { render, screen } from '@testing-library/react';

import Card from './Card';
import React from 'react';

describe('Card', () => {
  it('should have "card"', () => {
    render(<Card id={0} img={''} common={''} latin={''} watering={''} family={''} watches={0} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
