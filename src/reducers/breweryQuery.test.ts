import { describe, expect, it } from 'vitest';
import { queryReducer } from './breweryQuery';
import { BY_CITY, BY_STATE, BY_TYPE } from '../constants/api';

describe('breweryQuery reducer', () => {
  it('sets state properties', () => {
    expect(
      queryReducer(undefined, { type: BY_CITY, value: 'Walla Walla' })
    ).toEqual({ by_city: 'Walla Walla', per_page: 200 });

    expect(
      queryReducer(undefined, { type: BY_STATE, value: 'Washington' })
    ).toEqual({ by_state: 'Washington', per_page: 200 });

    expect(queryReducer(undefined, { type: BY_TYPE, value: 'nano' })).toEqual({
      by_type: 'nano',
      per_page: 200,
    });
  });
});
