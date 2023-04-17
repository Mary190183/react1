import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';
import React from 'react';

describe('Modal', () => {
  it('should have "modal"', () => {
    render(
      <Modal
        id={null}
        onClose={function (): void {}}
        img={null}
        common={null}
        latin={null}
        family={null}
        climate={null}
        categories={null}
      />
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
