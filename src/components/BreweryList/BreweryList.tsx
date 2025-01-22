import { Brewery } from '../../services/types';

interface BreweryListProps {
  breweries: Brewery[];
}

export const BreweryList = ({ breweries }: BreweryListProps) => {
  return breweries.map((brewery) => <div>{brewery.name}</div>);
};
