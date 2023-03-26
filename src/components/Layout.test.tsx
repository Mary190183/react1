import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Layout } from './Layout';

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
