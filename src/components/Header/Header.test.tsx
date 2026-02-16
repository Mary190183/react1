import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

describe('Header', () => {
  it('should have "Recycle"', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/Recycle/i)).toBeInTheDocument();
  });
  it('should have "About us"', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
