import { describe, test, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button Tests', () => {
  test('Fires click handler', async () => {
    const mockClickHandler = vi.fn();

    render(<Button text="Click Me" onClick={mockClickHandler} type="button" />);

    const button = screen.getByText('Click Me');

    await userEvent.click(button);

    expect(mockClickHandler).toHaveBeenCalled();
  });
});
