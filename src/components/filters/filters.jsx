import React, {useState} from 'react';
import {CitiesMultipleSelect} from './citiesFilter/citiesMultipleSelect';
import './filters.scss';
import {StatusMultipleSelect} from './statusFilter/statusMultipleSelect';
import {StreetsMultipleSelect} from './streetsFilter/streetsMultipleSelect';

export const Filters = ({
  statusList,
  cityNames,
  streetNames,
  setStreetNames,
  filtered,
  setFiltered,
  task,
  setTask,
  filterCitySelectValue,
  setFilterCitySelectValue,
  filterStatusSelectValue,
  setFilterStatusSelectValue,
}) => {
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
          task={task}
          setFiltered={setFiltered}
          filterCitySelectValue={filterCitySelectValue}
          streetNames={streetNames}
        />
      </div>
      <div className="search-filters__container">
        <StatusMultipleSelect
          task={task}
          setFiltered={setFiltered}
          statusList={statusList}
          filterStatusSelectValue={filterStatusSelectValue}
          setFilterStatusSelectValue={setFilterStatusSelectValue}
        />
        {/* <div className="search-filters__header">
          <form>
            <input placeholder="Статус" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport"></div> */}
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
