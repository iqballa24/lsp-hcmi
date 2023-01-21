/**
 * skenario testing
 *
 * - ButtonToTop component
 *  - should render ButtonToTop Component correctly
 *  - should render buttonToTop on position bottom is -100px
 */
import React from 'react';
import ButtonToTop from '@/components/UI/Button/ButtonToTop';
import { render, screen } from '@testing-library/react';

describe('buttonToTop component', () => {
  it('should render ButtonToTop component correctly', () => {
    render(<ButtonToTop />);

    const buttonToTop = screen.getByRole('button', { name: 'button-top' });

    expect(buttonToTop).toBeInTheDocument();
  });
});
