import { createContext, useReducer } from 'react';

const defaultState = {
  breweries: [],
  isLoading: false,
};

const BreweryListContext = createContext(defaultState);

function breweryListReducer(state, action) {
  switch (action.type) {
    case 'SET_BREWERIES':
      return { ...state, breweries: action.payload };
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

// export function BreweryListProvider({ children }) {
//   const [state, dispatch] = useReducer(breweryListReducer, defaultState);

//   return <BreweryListContext.Provider></BreweryListContext.Provider>;
// }
