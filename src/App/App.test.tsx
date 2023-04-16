import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should have wrapper', () => {
    render(<App />);
    expect(screen.queryByTestId('wrapper')).not.toBeInTheDocument();
  });
});
