import { API_URL } from '../constants/api';
import { convertRequestToQueryString } from '../helpers/helpers';
import { FetchBreweriesRequest, Brewery } from './types';

export async function fetchBreweries(
  request: FetchBreweriesRequest
): Promise<Brewery[]> {
  const queryString = convertRequestToQueryString(request);
  return fetch(`${API_URL}/breweries${queryString}`).then((res) => res.json());
}

export async function fetchBrewery(id: string): Promise<Brewery> {
  return fetch(`${API_URL}/breweries/${id}`).then((res) => res.json());
}
