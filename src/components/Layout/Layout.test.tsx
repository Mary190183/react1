import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Layout } from './Layout';
import React from 'react';

describe('Layout', () => {
  it('should have "wrapper"', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByRole('wrapper')).toBeInTheDocument();
  });
});
