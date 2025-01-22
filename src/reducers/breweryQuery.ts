import { BreweryType, FetchBreweriesRequest } from '../services/types';

export function queryReducer(
  state: FetchBreweriesRequest,
  action: {
    type: keyof FetchBreweriesRequest;
    value: string | number | BreweryType | undefined;
  }
): FetchBreweriesRequest {
  switch (action.type) {
    case 'by_city':
      return { ...state, by_city: action.value as string };
    case 'by_type':
      return { ...state, by_type: action.value as BreweryType };
    case 'per_page':
      return { ...state, per_page: action.value as number };
    case 'page':
      return { ...state, page: action.value as number };
    default:
      return state;
  }
}
