import { render, screen } from '@testing-library/react';

import App from './App/App';

describe('App', () => {
  it('should have App', () => {
    render(<App />);
    expect(screen.queryByTestId('App')).not.toBeInTheDocument();
  });
});
