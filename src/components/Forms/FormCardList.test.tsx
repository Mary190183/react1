import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { FormCardList } from './FormCardList';
import React from 'react';

describe('FormCardList', () => {
  it('should have "container-form-card"', () => {
    render(<FormCardList items={[]} />);
    expect(screen.getByTestId('container-form-card')).toBeInTheDocument();
  });
});
