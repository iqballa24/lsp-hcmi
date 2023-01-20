/**
 * skenario testing
 *
 * - ModalRegister Component
 *  - should render modalRegister correctly
 *  - should call toggleRegister function when button is clicked
 */
import React, { ReactNode, ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import ModalRegister from '@/components/UI/Modal/ModalRegister';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('modalRegister component', () => {
  let mockToggle: jest.Mock<() => void>;
  const oldCreatePortal = ReactDOM.createPortal;

  beforeEach(() => {
    mockToggle = jest.fn();
    ReactDOM.createPortal = (node: ReactNode): ReactPortal =>
      node as ReactPortal;
  });

  afterAll(() => {
    ReactDOM.createPortal = oldCreatePortal;
  });

  it('should render modalRegister correctly', () => {
    render(<ModalRegister toggleRegister={mockToggle} />);

    const modal = screen.getByRole('img', { name: 'Sertifikasi LSP HCMI' });

    expect(modal).toBeInTheDocument();
  });

  it('should call toggleRegister function when button is clicked', async () => {
    render(<ModalRegister toggleRegister={mockToggle} />);

    const closeModal = screen.getByLabelText('close register modal');

    await userEvent.click(closeModal);

    expect(mockToggle).toBeCalled();
  });
});
