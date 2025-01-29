import { Brewery } from '../types';

export const BreweryDetailMock: Brewery = {
  id: '6e7d8fda-f517-4aa8-ade3-19d145857052',
  name: 'Fulton Beer',
  brewery_type: 'regional',
  address_1: '2540 2nd St NE',
  address_2: null,
  address_3: null,
  city: 'Minneapolis',
  state_province: 'Minnesota',
  postal_code: '55418-3412',
  country: 'United States',
  longitude: '-93.26664',
  latitude: '45.046388',
  phone: '6128760904',
  website_url: 'http://www.fultonbeer.com',
  state: 'Minnesota',
  street: '2540 2nd St NE',
};

export const BreweryDetailMockWithFullAddress: Brewery = {
  ...BreweryDetailMock,
  address_2: 'Suite 100',
  address_3: 'Third Floor',
};
