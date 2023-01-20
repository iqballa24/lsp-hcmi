/**
 * skenario testing
 *
 * - ModalImage Component
 *  - should render modalImage correctly
 *  - should call toggleModal function when button is clicked
 */
import React, { ReactNode, ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import Calendar from '@/assets/img/calendar.jpg';
import ModalImage from '@/components/UI/Modal/ModalImage';
import { render, screen } from '@testing-library/react';

describe('modalImage component', () => {
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

  it('should render modalImage correctly', () => {
    render(
      <ModalImage
        altText="calendar"
        image={Calendar}
        toggleModal={mockToggle}
      />
    );

    const modal = screen.getByRole('img', { name: 'calendar' });

    expect(modal).toBeInTheDocument();
  });

  it('should call toggleModal function when button is clicked', async () => {
    render(
      <ModalImage
        altText="calendar"
        image={Calendar}
        toggleModal={mockToggle}
      />
    );

    const closeModal = screen.getByLabelText('close calendar');

    await userEvent.click(closeModal);

    expect(mockToggle).toBeCalled();
  });
});
