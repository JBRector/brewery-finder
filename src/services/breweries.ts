import { API_URL } from '../constants/api';
import { convertRequestToQueryString } from '../helpers/helpers';
import { FetchBreweriesRequest } from './types';

export async function fetchBreweries(request: FetchBreweriesRequest) {
  const queryString = convertRequestToQueryString(request);
  console.log(queryString);
  return fetch(`${API_URL}/breweries${queryString}`);
}
