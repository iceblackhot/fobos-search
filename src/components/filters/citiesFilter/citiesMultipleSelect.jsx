import React, {useState} from 'react';

export const CitiesMultipleSelect = ({
  task,
  setFiltered,
  cityNames,
  filterCitySelectValue,
  setFilterCitySelectValue,
}) => {
  const [filterCitySearchValue, setFilterCitySearchValue] = useState('');

  let newTaskList = [...task];

  //   let index = newTaskList.findIndex((value) => {
  //     return value.cityId;
  // if (value.id === formElements.id.value) {
  //   return true;
  // }
  //   });
  //   console.log(index);

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
    // console.log(tmpFilterCitySelectValue);

    let currCityIndex = tmpFilterCitySelectValue.map((obj) => {
      return Number(obj);
    });
    console.log(currCityIndex);

    // let cityIndex = newTaskList.map((obj) => {
    //   return obj.cityId;
    // });
    // console.log(cityIndex);

    newTaskList = [...task].filter((obj) => currCityIndex.includes(obj.cityId));
    console.log(newTaskList);
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
        className="search-filters__viewport"
        name="city"
        multiple={true}
        onChange={onChangeCityFilter}
        value={filterCitySelectValue}>
        {cityNames.map((obj) => {
          if (obj.cityName.toLowerCase().includes(filterCitySearchValue.toLowerCase())) {
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
