/**
 * skenario testing
 *
 * - Button component
 *  - should render button correctly
 *  - should render button primary correctly
 *  - should render button secondary correctly
 *  - should render button skema correctly
 *  - should render button pdf correctly
 *  - should call function when button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/components/UI/Button';

describe('button component', () => {
  let mockHandler: jest.Mock<() => void>;

  beforeEach(() => {
    mockHandler = jest.fn();
  });

  it('should render button correctly', () => {
    render(
      <Button
        id="btn-testing"
        className=""
        ariaLabel="testing"
        isPrimary
        onClick={mockHandler}
      >
        Testing
      </Button>
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should render button primary correctly', () => {
    const { container } = render(
      <Button
        id="btn-testing"
        className=""
        ariaLabel="testing"
        isPrimary
        onClick={mockHandler}
      >
        Testing
      </Button>
    );

    expect(container.firstChild).toHaveClass('button-primary');
  });

  it('should render button secondary correctly', () => {
    const { container } = render(
      <Button
        id="btn-testing"
        className=""
        ariaLabel="testing"
        isSecondary
        onClick={mockHandler}
      >
        Testing
      </Button>
    );

    expect(container.firstChild).toHaveClass('button-secondary');
  });

  it('should render button secondary correctly', () => {
    const { container } = render(
      <Button
        id="btn-testing"
        className=""
        ariaLabel="testing"
        isSecondary
        onClick={mockHandler}
      >
        Testing
      </Button>
    );

    expect(container.firstChild).toHaveClass('button-secondary');
  });

  it('should render button skema correctly', () => {
    const { container } = render(
      <Button
        id="btn-testing"
        className=""
        ariaLabel="testing"
        isSkema
        onClick={mockHandler}
      >
        Testing
      </Button>
    );

    expect(container.firstChild).toHaveClass('button-skema');
  });

  it('should render button pdf correctly', () => {
    const { container } = render(
      <Button
        id="btn-testing"
        className=""
        ariaLabel="testing"
        isPdf
        onClick={mockHandler}
      >
        Testing
      </Button>
    );

    expect(container.firstChild).toHaveClass('button-pdf');
  });

  it('should call function when button is clicked', async () => {
    render(
      <Button
        id="btn-testing"
        className=""
        ariaLabel="testing"
        isPrimary
        onClick={mockHandler}
      >
        Testing
      </Button>
    );

    const button = await screen.getByRole('button');

    await userEvent.click(button);

    expect(mockHandler).toBeCalled();
  });
});
