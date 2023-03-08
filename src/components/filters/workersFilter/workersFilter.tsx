import {useAppContext} from '../../appContext/appContext';
import {SelectFilter} from '../selectFilter/selectFilter';

export const WorkersFilter = () => {
  const {filterWorker, filterWorkerList, setFilterWorker} = useAppContext();

  return (
    <SelectFilter
      filterListItems={filterWorkerList}
      filterSelected={filterWorker}
      filterSetSelected={setFilterWorker}
      placeholder="Виконавець"></SelectFilter>
  );
};
