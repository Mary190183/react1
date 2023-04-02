import { render, screen } from '@testing-library/react';

import Counter from './Counter';

describe('Counter', () => {
  it('should have two button', () => {
    render(<Counter />);
    expect(screen.getAllByTestId('button')).toHaveLength(2);
  });
});
