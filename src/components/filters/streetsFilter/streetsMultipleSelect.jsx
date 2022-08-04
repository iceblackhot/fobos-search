import React, {useState} from 'react';

export const StreetsMultipleSelect = ({streetNames, filterCitySelectValue}) => {
  const [filterStreetSearchValue, setFilterStreetSearchValue] = useState('');
  const [filterStreetSelectValue, setFilterStreetSelectValue] = useState([]);

  function onChangeStreetSearchValue(e) {
    let str = e.target.value;
    str.replace(/[^A-Za-z0-9А-Яа-я]/, '');
    setFilterStreetSearchValue(str);
  }

  function onFilterStreetReset() {
    setFilterStreetSearchValue('');
    setFilterStreetSelectValue([]);
  }

  function onChangeStreetFilter(e) {
    let tmpFilterStreetSelectValue = [...filterStreetSelectValue];
    let index = tmpFilterStreetSelectValue.indexOf(e.target.value);

    if (index >= 0) {
      tmpFilterStreetSelectValue.splice(index, 1);
    } else {
      tmpFilterStreetSelectValue.push(e.target.value);
    }
    setFilterStreetSelectValue(tmpFilterStreetSelectValue);
  }

  return (
    <div>
      <div className="search-filters__header">
        <input
          placeholder="Выберите улицу"
          type="text"
          value={filterStreetSearchValue}
          onChange={onChangeStreetSearchValue}></input>
        <button onClick={onFilterStreetReset}>reset</button>
      </div>
      <div>
        <select
          className="search-filters__viewport"
          name="street"
          multiple={true}
          onChange={onChangeStreetFilter}
          value={filterStreetSelectValue}>
          {streetNames.map((obj) => {
            if (filterCitySelectValue.indexOf(obj.cityId.toString()) >= 0) {
              if (filterStreetSearchValue.length > 0) {
                if (obj.streetName.toLowerCase().includes(filterStreetSearchValue.toLowerCase())) {
                  return (
                    <option value={obj.id} key={obj.id}>
                      {obj.streetName}
                    </option>
                  );
                }
              } else {
                return (
                  <option value={obj.id} key={obj.id}>
                    {obj.streetName}
                  </option>
                );
              }
            }
          })}
        </select>
      </div>
    </div>
  );
};
