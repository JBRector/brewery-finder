import { describe, test, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';
import userEvent from '@testing-library/user-event';

const labelText = 'Test element label';

describe('Select Tests', () => {
  test('Fires select handler', async () => {
    const methods = {
      changeHandler: () => {},
    };

    const changeHandlerSpy = vi.spyOn(methods, 'changeHandler');

    render(
      <Select
        label={labelText}
        options={['all', 'micro', 'nano', 'regional', 'large']}
        forValue="by_type"
        onChange={methods.changeHandler}
      />
    );

    // Finding by label text implies that the label text is rendered correctly
    const select = screen.getByLabelText(labelText);

    await userEvent.selectOptions(select, 'nano');

    expect(changeHandlerSpy.mock.calls.length).toBe(1);
  });
});
