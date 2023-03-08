import {useAppContext} from '../../appContext/appContext';
import {SelectFilter} from '../selectFilter/selectFilter';

export const StreetsFilter = () => {
  const {filterStreet, filterStreetList, setFilterStreet} = useAppContext();

  return (
    <SelectFilter
      filterListItems={filterStreetList.map((value) => ({
        id: value.id,
        name: value.name,
        total: value.total,
      }))}
      filterSelected={filterStreet}
      filterSetSelected={setFilterStreet}
      placeholder="Вулиця"></SelectFilter>
  );
};
