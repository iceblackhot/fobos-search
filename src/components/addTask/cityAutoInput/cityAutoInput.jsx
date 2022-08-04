import React, {useState} from 'react';
import './cityAutoInput.scss';

export const CityAutoInput = ({setCity, cityId, setCityId, cityNames, setFiltered, task}) => {
  const [cityValue, setCityValue] = useState('');

  function handleChangeCity(e) {
    e.preventDefault();
    let currCity = [...cityNames].filter((obj) => {
      if (obj.id.toString() === e.currentTarget.value) {
        setCity(obj.cityName);
        return obj;
      }
    });
    setCityId(currCity[0].id);
  }

  function showFiltercity(id, name) {
    if (!cityValue) {
      setFiltered(task);
    }
    let filterCity = [...task].filter((cityName) => cityName.city === name);
    setFiltered(filterCity);
  }

  return (
    <div>
      <select value={cityId} onChange={handleChangeCity}>
        {cityNames.map((obj) => {
          return (
            <option
              onClick={() => {
                showFiltercity(obj.id, obj.cityName);
                setCityValue(obj.cityName);
              }}
              key={obj.id}
              value={obj.id}>
              {obj.cityName}
            </option>
          );
        })}
      </select>
    </div>
  );
};
