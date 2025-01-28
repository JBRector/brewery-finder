import { NavLink } from 'react-router';
import { Brewery } from '../../services/types';

interface BreweryListProps {
  breweries: Brewery[];
}

const BreweryList = ({ breweries }: BreweryListProps) => {
  return breweries.map((brewery) => (
    <div key={brewery.id}>
      <NavLink to={`/${brewery.id}`} viewTransition>
        {brewery.name}
      </NavLink>
    </div>
  ));
};

export default BreweryList;
