import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { NotFoundPage } from '../404/404';
import { About } from './about';

const fakeroutes = [
  {
    path: '/',
    element: <About />,
    errorElement: <NotFoundPage />,
  },
];
const router = createMemoryRouter(fakeroutes);

describe('About', () => {
  it('should have "Grow your home!" text', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByRole('heading')).toHaveTextContent(/Grow your home!/i);
  });
});
