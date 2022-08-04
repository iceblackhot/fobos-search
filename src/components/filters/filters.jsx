import React, {useState} from 'react';
import {CitiesMultipleSelect} from './citiesFilter/citiesMultipleSelect';
import './filters.scss';
import {StreetsMultipleSelect} from './streetsFilter/streetsMultipleSelect';

export const Filters = ({
  cityNames,
  streetNames,
  setStreetNames,
  filtered,
  setFiltered,
  task,
  setTask,
  filterCitySelectValue,
  setFilterCitySelectValue,
}) => {
  const [streetValue, setStreetValue] = useState('');

  // console.log(cityValue);

  return (
    <div className="search-filters">
      <div className="search-filters__container">
        <CitiesMultipleSelect
        task={task}
        setFiltered={setFiltered}
          cityNames={cityNames}
          filterCitySelectValue={filterCitySelectValue}
          setFilterCitySelectValue={setFilterCitySelectValue}
        />
      </div>
      <div className="search-filters__container">
        <StreetsMultipleSelect
          filterCitySelectValue={filterCitySelectValue}
          streetNames={streetNames}
        />
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Статус" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport"></div>
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Сотрудник" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport"></div>
      </div>
    </div>
  );
};
