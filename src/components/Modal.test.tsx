import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';
import React from 'react';

describe('Modal', () => {
  it('should have "modal"', () => {
    render(
      <Modal
        onClose={function (): void {}}
        id={0}
        img={''}
        common={''}
        latin={''}
        categories={''}
        description={''}
      />
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
