import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { NotFoundPage } from './404';

const fakeroutes = [
  {
    path: '/',
    element: <NotFoundPage />,
  },
];
const router = createMemoryRouter(fakeroutes);

const assignMock = vi.fn();
Object.defineProperty(window, 'location', {
  value: {
    hash: {
      endsWith: assignMock,
      includes: assignMock,
    },
    assign: assignMock,
  },
  writable: true,
});

describe('react error page', () => {
  test('error page renders correctly', () => {
    render(<RouterProvider router={router} />);
    history.replaceState({}, '', 'fakeURL');
    window.location.assign(window.location.origin + '/fakePath');
    expect(screen.getByRole('heading')).toHaveTextContent(/Houseplant/i);
  });
});
