import React from 'react';
import './cityAutoInput.scss';

export const CityAutoInput = ({
  city,
  setCity,
  street,
  setStreet,
  setStreetId,
  cityId,
  setCityId,
  cityNames,
  streetNames,
  setStreetNames,
  filtered,
  setFiltered,
}) => {
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

  return (
    <div>
      <select value={cityId} onChange={handleChangeCity}>
        {cityNames.map((obj) => {
          return (
            <option key={obj.id} value={obj.id}>
              {obj.cityName}
            </option>
          );
        })}
      </select>
    </div>
  );
};
