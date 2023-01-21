/**
 * skenario testing
 *
 * - Toast component
 *  - should render toast component correctly
 */
import React from 'react';
import Toast from '@/components/UI/Toast';
import { render, screen } from '@testing-library/react';

describe('toast component', () => {
  it('should render toast component correctly', () => {
    const message = "testing toast";
    render(<Toast message={message} />);

    const toast = screen.getByLabelText(message);

    expect(toast).toBeInTheDocument();
  });
});
