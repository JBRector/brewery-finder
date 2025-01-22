import { FetchBreweriesRequest } from '../services/types';

export function convertRequestToQueryString(request: FetchBreweriesRequest) {
  const keys = Object.keys(request);

  if (!keys.length) {
    return '';
  }

  const query = keys
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${
          request[key] ? encodeURIComponent(request[key]) : ''
        }`
    )
    .join('&');

  return `?${query}`;
}
