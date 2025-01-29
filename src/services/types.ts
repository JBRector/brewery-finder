export type BreweryType = 'micro' | 'nano' | 'regional' | 'large';

export interface FetchBreweriesBase {
  by_city?: string;
  by_state?: string;
  by_type?: BreweryType;
  per_page?: number;
  page?: number;
}

export interface FetchBreweriesRequest extends FetchBreweriesBase {
  [key: string]: string | BreweryType | number | undefined;
}

export interface Brewery {
  id: string | null;
  name: string | null;
  brewery_type: BreweryType | null;
  address_1: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string | null;
  state_province: string | null;
  postal_code: string | null;
  country: string | null;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  state: string | null;
  street: string | null;
}

export interface BreweriesMeta {
  total: number;
  page: string;
  per_page: string;
}
