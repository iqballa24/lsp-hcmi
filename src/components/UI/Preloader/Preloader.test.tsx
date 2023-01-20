/**
 * skenario testing
 *
 * - Preloader component
 *  - should render preloader component correctly
 *
 */

import React, { ReactNode, ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Preloader from '@/components/UI/Preloader';

describe('preloader component', () => {
  const oldCreatePortal = ReactDOM.createPortal;

  beforeEach(() => {
    ReactDOM.createPortal = (node: ReactNode): ReactPortal =>
      node as ReactPortal;
  });

  afterEach(() => {
    ReactDOM.createPortal = oldCreatePortal;
  });

  it('should render preloader component correctly', () => {
    render(<Preloader />);

    const preloader = screen.getByRole('img', { name: 'preloader' });

    expect(preloader).toBeInTheDocument();
  });
});
