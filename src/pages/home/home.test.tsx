// import { render, screen } from '@testing-library/react';

// import { Home } from './home';
// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from '../../store';

// describe('Home', () => {
//   it('should have "home"', () => {
//     render(
//       <Provider store={store}>
//         <Home />
//       </Provider>
//     );
//     expect(screen.getByTestId('home')).toBeInTheDocument();
//   });
// });
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { NotFoundPage } from '../404/404';
import { Home } from './home';

const fakeroutes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
];
const router = createMemoryRouter(fakeroutes);

describe('Home', () => {
  it('should have "home"', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
