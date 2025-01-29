import {
  BY_CITY,
  BY_STATE,
  BY_TYPE,
  PAGE,
  PER_PAGE,
  RESET,
} from '../constants/api';
import { BreweryType, FetchBreweriesRequest } from '../services/types';

export const defaultState: FetchBreweriesRequest = {
  per_page: 200,
};

export function queryReducer(
  state: FetchBreweriesRequest = defaultState,
  action: {
    type: keyof FetchBreweriesRequest;
    value?: string | number | BreweryType;
  }
): FetchBreweriesRequest {
  switch (action.type) {
    case BY_CITY:
      return { ...state, by_city: action.value as string };
    case BY_STATE:
      return { ...state, by_state: action.value as string };
    case BY_TYPE:
      return { ...state, by_type: action.value as BreweryType };
    case PER_PAGE:
      return { ...state, per_page: action.value as number };
    case PAGE:
      return { ...state, page: action.value as number };
    case RESET:
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
