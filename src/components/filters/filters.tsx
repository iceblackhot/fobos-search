import {CitiesFilter} from './citiesFilter/citiesFilter';
import {StatusesFilter} from './statusesFilter/statusesFilter';
import {StreetsFilter} from './streetsFilter/streetsFilter';
import './filters.scss';
import {WorkersFilter} from './workersFilter/workersFilter';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import {useAppContext} from '../appContext/appContext';

export const Filters = () => {
  const {showFilters, setShowFilters} = useAppContext();

  let classNameSearchFilters = showFilters ? 'search-filters active' : 'search-filters';

  const handleActvBtn = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={classNameSearchFilters}>
      <div className="search-filters__title-wrapper">
        <h1>SEARCH FILTERS</h1>
      </div>
      <KeyboardDoubleArrowDownRoundedIcon
        className="search-filters__show-ico"
        onClick={handleActvBtn}
      />
      <CitiesFilter />
      <StreetsFilter />
      <StatusesFilter />
      <WorkersFilter />
    </div>
  );
};
