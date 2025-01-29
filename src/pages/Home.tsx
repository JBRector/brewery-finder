import { Suspense, useReducer, useState, useEffect, lazy } from 'react';

import { Select, NoResults, Loading, Question, Button } from '../components';
const BreweryList = lazy(() => import('../components/BreweryList/BreweryList'));

import { FetchBreweriesRequest, Brewery } from '../services/types';
import { fetchBreweries } from '../services/breweries';

import { BREWERIES_STORAGE_KEY } from '../constants/storage';
import { BY_CITY, BY_TYPE, RESET } from '../constants/api';

import { queryReducer } from '../reducers/breweryQuery';

import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from '../helpers/helpers';

export default function HomePage() {
  const [state, dispatch] = useReducer(queryReducer, { per_page: 200 });
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const makeRequest = async () => {
    setIsLoading(true);
    setBreweries([]);
    clearLocalStorageItem(BREWERIES_STORAGE_KEY);

    await fetchBreweries(state)
      .then((res) => {
        setBreweries(res);
        setLocalStorageItem(BREWERIES_STORAGE_KEY, res);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    // If the value is 'all', we want it to be empty so that param is not used
    dispatch({
      type: id as keyof FetchBreweriesRequest,
      value: value === 'all' ? undefined : value,
    });

    if (value === 'Columbus') {
      dispatch({
        type: 'by_state',
        value: 'Ohio',
      });
    } else if (value === 'Minneapolis') {
      dispatch({
        type: 'by_state',
        value: 'Minnesota',
      });
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSearched(true);
    makeRequest();
  };

  const startOver = () => {
    setBreweries([]);
    setHasSearched(false);
    clearLocalStorageItem(BREWERIES_STORAGE_KEY);

    dispatch({ type: RESET });
  };

  useEffect(() => {
    // Typically for something like this to scale I would do context,
    // but for a small example seemed like overkill
    // Just wanted to remember the list
    const localStorageBreweries = getLocalStorageItem(BREWERIES_STORAGE_KEY);
    if (localStorageBreweries) {
      setBreweries(localStorageBreweries);
    }
  }, []);

  return (
    <div className="container">
      <h1>Brewery Finder</h1>

      <Question />

      <form className="two-col" onSubmit={submitHandler}>
        <Select
          label="Select a City"
          options={['', 'Columbus', 'Minneapolis']}
          forValue={BY_CITY}
          onChange={changeHandler}
        />

        <Select
          label="What type of brewery?"
          options={['all', 'micro', 'nano', 'regional', 'large']}
          forValue={BY_TYPE}
          onChange={changeHandler}
        />

        <Button type="submit" text="Show me the breweries!" />
        <Button
          type="reset"
          text="Start Over"
          onClick={() => startOver()}
          buttonStyle="secondary"
        />
      </form>

      {isLoading && <Loading />}

      {hasSearched && !isLoading && breweries.length === 0 && <NoResults />}

      {breweries.length > 0 && (
        <Suspense fallback={<Loading />}>
          <BreweryList breweries={breweries} />
        </Suspense>
      )}
    </div>
  );
}
