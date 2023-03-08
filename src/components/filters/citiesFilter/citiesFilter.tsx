import {useAppContext} from '../../appContext/appContext';
import {SelectFilter} from '../selectFilter/selectFilter';

export const CitiesFilter = () => {
  const {filterCity, filterCityList, setFilterCity} = useAppContext();

  return (
    <SelectFilter
      filterListItems={filterCityList}
      filterSelected={filterCity}
      filterSetSelected={setFilterCity}
      placeholder="Місто"></SelectFilter>
  );
};
