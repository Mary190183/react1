import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Loading } from './Loading';
import React from 'react';

describe('Loading', () => {
  it('should have "loading"', () => {
    render(<Loading />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
