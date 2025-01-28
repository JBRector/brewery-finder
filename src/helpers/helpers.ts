import { Brewery, FetchBreweriesRequest } from '../services/types';

/**
 * Convert request object to query string
 * @param request
 * @returns query string
 */
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

/**
 * Functions to set, get, and clear local storage items
 */
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

/**
 * Takes a set of 10 digits and formats it like (614) 555-1212
 * @param phone
 * @returns formatted phone number
 */
export function formatPhone(phone: string) {
  if (!phone || phone.length !== 10) return phone;

  console.log(phone);
  console.log(phone.substring(3, 5));

  return `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(
    6
  )}`;
}
