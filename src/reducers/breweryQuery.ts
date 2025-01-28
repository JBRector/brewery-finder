import { BreweryType, FetchBreweriesRequest } from '../services/types';

export function queryReducer(
  state: FetchBreweriesRequest,
  action: {
    type: keyof FetchBreweriesRequest;
    value?: string | number | BreweryType;
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
    case 'reset':
      return {
        ...state,
        by_city: '',
        by_type: undefined,
        per_page: 200,
        page: 1,
      };
    default:
      return state;
  }
}
