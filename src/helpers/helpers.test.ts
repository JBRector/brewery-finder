import { describe, it, expect } from 'vitest';

import { convertRequestToQueryString } from './helpers';

describe('convertRequestToQueryString', () => {
  it('returns proper query string', () => {
    expect(convertRequestToQueryString({})).toEqual('');
    expect(convertRequestToQueryString({ by_city: 'Columbus' })).toEqual(
      '?by_city=Columbus'
    );
    expect(
      convertRequestToQueryString({ by_city: 'Minneapolis', per_page: 3 })
    ).toEqual('?by_city=Minneapolis&per_page=3');
    expect(
      convertRequestToQueryString({
        by_city: 'Minneapolis',
        per_page: 3,
        by_type: 'micro',
      })
    ).toEqual('?by_city=Minneapolis&per_page=3&by_type=micro');
    expect(
      convertRequestToQueryString({
        by_city: 'Minneapolis',
        per_page: 3,
        by_type: 'micro',
        page: 5,
      })
    ).toEqual('?by_city=Minneapolis&per_page=3&by_type=micro&page=5');
  });
});
