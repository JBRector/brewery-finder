import { Brewery, FetchBreweriesRequest } from '../services/types';

export function convertRequestToQueryString(request: FetchBreweriesRequest) {
  const keys = Object.keys(request);

  if (!keys.length) {
    return '';
  }

  // Remove empty values, then convert to query string
  const query = keys
    .filter((key) => request[key])
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${
          request[key] ? encodeURIComponent(request[key]) : ''
        }`
    )
    .join('&');

  return `?${query}`;
}

export function setLocalStorageItem(
  key: string,
  value: Brewery[] | FetchBreweriesRequest
) {
  if (!value) return;

  localStorage.setItem(key, JSON.stringify(value));
}

export function clearLocalStorageItem(key: string) {
  if (!key) return;

  localStorage.removeItem(key);
}

export function getLocalStorageItem(key: string) {
  if (!key) return;

  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return null;
}

export function formatPhone(phone: string) {
  if (!phone || phone.length !== 10) return phone;

  console.log(phone);
  console.log(phone.substring(3, 5));

  return `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(
    6
  )}`;
}
