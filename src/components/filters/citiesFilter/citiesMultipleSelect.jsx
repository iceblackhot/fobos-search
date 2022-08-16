import React, {useState} from 'react';

export const CitiesMultipleSelect = ({
  task,
  setFiltered,
  cityNames,
  filterCitySelectValue,
  setFilterCitySelectValue,
  classDropViewport,
}) => {
  const [filterCitySearchValue, setFilterCitySearchValue] = useState('');

  let newTaskList = [...task];

  function onChangeCitySearchValue(e) {
    let str = e.target.value;
    str.replace(/[^A-Za-z0-9А-Яа-я]/, '');
    setFilterCitySearchValue(str);
  }

  async function onFilterCityReset() {
    setFilterCitySearchValue('');
    setFilterCitySelectValue([]);
    setFiltered(task);
  }

  function onChangeCityFilter(e) {
    let tmpFilterCitySelectValue = [...filterCitySelectValue];

    let index = tmpFilterCitySelectValue.indexOf(e.target.value);

    if (index >= 0) {
      tmpFilterCitySelectValue.splice(index, 1);
    } else {
      tmpFilterCitySelectValue.push(e.target.value);
    }
    setFilterCitySelectValue(tmpFilterCitySelectValue);

    let currCityIndex = tmpFilterCitySelectValue.map((obj) => {
      return Number(obj);
    });

    newTaskList = [...task].filter((obj) => currCityIndex.includes(obj.cityId));

    setFiltered(newTaskList);
  }

  return (
    <div>
      <div className="search-filters__header">
        <input
          placeholder="Введите город"
          type="text"
          value={filterCitySearchValue}
          onChange={onChangeCitySearchValue}></input>
        <button onClick={onFilterCityReset}>reset</button>
      </div>
      <select
        className={classDropViewport}
        name="city"
        multiple={true}
        onChange={onChangeCityFilter}
        value={filterCitySelectValue}>
        {cityNames.map((obj) => {
          if (
            (Array.isArray(filterCitySelectValue) &&
              filterCitySelectValue.indexOf(obj.id.toString()) >= 0) ||
            obj.cityName.toLowerCase().includes(filterCitySearchValue.toLowerCase())
          ) {
            return (
              <option value={obj.id} key={obj.id}>
                {obj.cityName}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};
