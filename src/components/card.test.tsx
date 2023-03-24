import { render, screen } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should have heading', () => {
    render(<Card id={1} name={''} description={''} price={0} watches={0} image={''} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
