import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { FormCard } from './FormCard';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('FormCard', () => {
  it('should have "form-card"', () => {
    render(
      <Provider store={store}>
        <FormCard
          id={0}
          title={''}
          select={''}
          file={undefined}
          date={''}
          check={false}
          radio={''}
          submit={false}
        />
      </Provider>
    );
    expect(screen.getByTestId('form-card')).toBeInTheDocument();
  });
});
