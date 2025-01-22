import { useReducer, useState } from 'react';

import { FetchBreweriesRequest, Brewery } from '../services/types';
import { fetchBreweries } from '../services/breweries';
import { Select, BreweryList } from '../components';
import { queryReducer } from '../reducers/breweryQuery';

export default function HomePage() {
  const [state, dispatch] = useReducer(queryReducer, { per_page: 10 });
  const [breweries, setBreweries] = useState<Brewery[]>([]);

  const makeRequest = async () => {
    console.log(state);
    const breweries: Brewery[] = await fetchBreweries(state)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));

    setBreweries(breweries);
    console.log(breweries);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.id);
    console.log(e.target.value);
    dispatch({
      type: e.target.id as keyof FetchBreweriesRequest,
      value: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    makeRequest();
  };

  return (
    <>
      <h1>Brewery Finder</h1>

      <form onSubmit={submitHandler}>
        <Select
          label="Select a City"
          options={['', 'Columbus', 'Minneapolis', 'Surprise Me']}
          forValue="by_city"
          onChange={changeHandler}
        />

        <Select
          label="What type of brewery?"
          options={['all', 'micro', 'nano', 'regional', 'large']}
          forValue="by_type"
          onChange={changeHandler}
        />

        <button type="submit">Show me the breweries!</button>
      </form>

      {breweries.length > 0 && <BreweryList breweries={breweries} />}
    </>
  );
}
