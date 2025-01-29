import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Loading } from '../components';

import { fetchBrewery } from '../services/breweries';
import { Brewery } from '../services/types';

import { formatPhone } from '../helpers/helpers';

export default function BreweryDetail() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [breweryData, setBreweryData] = useState<Brewery | undefined>(
    undefined
  );

  const makeRequest = async () => {
    setIsLoading(true);

    await fetchBrewery(params.breweryId || '')
      .then((res) => {
        setBreweryData(res);
        console.log(res);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const printAddress = () => {
    return (
      <p>
        {breweryData?.address_1 ? breweryData?.address_1 : null}
        <br />
        {breweryData?.address_2 && (
          <>
            <span>{breweryData?.address_2}</span>
            <br />
          </>
        )}
        {breweryData?.address_3 && (
          <>
            <span>{breweryData?.address_3}</span>
            <br />
          </>
        )}
        {breweryData?.city}, {breweryData?.state} {breweryData?.postal_code}
      </p>
    );
  };

  const phoneNumber = formatPhone(breweryData?.phone || '');

  useEffect(() => {
    makeRequest();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container">
      {breweryData ? (
        <>
          <h1>{breweryData.name}</h1>

          <h2>Address</h2>
          {printAddress()}

          {breweryData.phone && (
            <>
              <h2>Phone</h2>
              <p>
                <a href={`tel: ${phoneNumber}`}>{phoneNumber}</a>
              </p>
            </>
          )}
          {breweryData.website_url && (
            <p>
              <a href={breweryData.website_url}>
                Visit {breweryData.name} on the web
              </a>
            </p>
          )}
        </>
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
}
