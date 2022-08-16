import React, {useState} from 'react';
import {CitiesMultipleSelect} from './citiesFilter/citiesMultipleSelect';
import './filters.scss';
import {StatusMultipleSelect} from './statusFilter/statusMultipleSelect';
import {StreetsMultipleSelect} from './streetsFilter/streetsMultipleSelect';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import {WorkersMultipleSelect} from './workersFilter/workersMultipleSelect';

export const Filters = ({
  statusList,
  cityNames,
  streetNames,
  workerNames,
  setFiltered,
  task,
  filterCitySelectValue,
  setFilterCitySelectValue,
  filterStatusSelectValue,
  setFilterStatusSelectValue,
  btnActive,
  setBtnActive,
}) => {
  const classDropBtn = `search-filters__drop-btn${btnActive ? ' active' : ''}`;

  const classDropViewport = `search-filters__viewport${btnActive ? ' active' : ''}`;

  const handleActvBtn = () => {
    setBtnActive(!btnActive);
  };

  return (
    <div className="search-filters">
      <div className={classDropBtn} onClick={handleActvBtn}>
        <KeyboardDoubleArrowDownRoundedIcon />
      </div>
      <div className="search-filters__container">
        <CitiesMultipleSelect
          classDropViewport={classDropViewport}
          task={task}
          setFiltered={setFiltered}
          cityNames={cityNames}
          filterCitySelectValue={filterCitySelectValue}
          setFilterCitySelectValue={setFilterCitySelectValue}
        />
      </div>
      <div className="search-filters__container">
        <StreetsMultipleSelect
          classDropViewport={classDropViewport}
          task={task}
          setFiltered={setFiltered}
          filterCitySelectValue={filterCitySelectValue}
          streetNames={streetNames}
        />
      </div>
      <div className="search-filters__container">
        <StatusMultipleSelect
          classDropViewport={classDropViewport}
          task={task}
          setFiltered={setFiltered}
          statusList={statusList}
          filterStatusSelectValue={filterStatusSelectValue}
          setFilterStatusSelectValue={setFilterStatusSelectValue}
        />
      </div>
      <div className="search-filters__container">
        <WorkersMultipleSelect
          classDropViewport={classDropViewport}
          workerNames={workerNames}
          task={task}
          setFiltered={setFiltered}
        />
      </div>
    </div>
  );
};
