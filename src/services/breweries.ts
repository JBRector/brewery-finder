import { API_URL } from '../constants/api';
import { convertRequestToQueryString } from '../helpers/helpers';
import { FetchBreweriesRequest } from './types';

export async function fetchBreweries(request: FetchBreweriesRequest) {
  const queryString = convertRequestToQueryString(request);
  console.log(queryString);
  return fetch(`${API_URL}/breweries${queryString}`);
}

export async function fetchBreweriesMeta(request: FetchBreweriesRequest) {
  const queryString = convertRequestToQueryString(request);
  console.log(queryString);
  return fetch(`${API_URL}/breweries/meta${queryString}`);
}

export async function fetchBrewery(id: string) {
  return fetch(`${API_URL}/breweries/${id}`);
}
