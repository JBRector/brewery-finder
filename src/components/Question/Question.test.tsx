import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Question } from './Question';

describe('Question Tests', () => {
  test('Opens hidden text', async () => {
    render(<Question />);

    const button = screen.getByTestId('question-button');

    await userEvent.click(button);

    const questionTest = screen.getByTestId('question-text');

    expect(questionTest).not.toBeNull();
  });

  test('Changes attributes', async () => {
    render(<Question />);

    const button = screen.getByTestId('question-button');

    await userEvent.click(button);

    const container = screen.getByTestId('question-container');
    const hiddenAttribute = container.getAttribute('aria-hidden');

    expect(hiddenAttribute).toBe('false');

    const expandedAttribute = button.getAttribute('aria-expanded');

    expect(expandedAttribute).toBe('true');
  });
});
