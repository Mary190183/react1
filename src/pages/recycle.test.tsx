import { render, screen } from '@testing-library/react';

import { Recycle } from './Recycle';

describe('Recycle', () => {
  it('should have "button-form"', () => {
    render(<Recycle />);
    expect(screen.getByTestId('button-form')).toBeInTheDocument();
  });
});
