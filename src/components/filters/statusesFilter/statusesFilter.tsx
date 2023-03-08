import {useAppContext} from '../../appContext/appContext';
import {SelectFilter} from '../selectFilter/selectFilter';

export const StatusesFilter = () => {
  const {filterStatus, filterStatusList, setFilterStatus} = useAppContext();

  return (
    <SelectFilter
      filterListItems={filterStatusList}
      filterSelected={filterStatus}
      filterSetSelected={setFilterStatus}
      placeholder="Статус"></SelectFilter>
  );
};
