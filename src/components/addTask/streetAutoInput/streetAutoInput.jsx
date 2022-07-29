import React from 'react';
import './streetAutoInput.scss';

export const StreetAutoInput = ({
  setStreet,
  streetId,
  setStreetId,
  streetNames,
  setStreetNames,
  cityId,
  setCityId,
}) => {
  let disabled = '';

  let newStreetNames = [...streetNames].filter((streetObj) => streetObj.cityId === cityId);

  if (newStreetNames.length === 0) {
    newStreetNames = [...streetNames];
    disabled = 'disabled';
  }

  function handleChangeStreet(e) {
    e.preventDefault();

    let currStreet = [...streetNames].filter((obj) => {
      if (obj.id.toString() === e.currentTarget.value) {
        return obj;
      }
    });
    setStreet(currStreet[0].streetName);
    if (newStreetNames.length === 0) {
      newStreetNames = [...streetNames].filter((streetObj) => streetObj.cityId !== cityId);
    }
    setStreetId(e.currentTarget.value);
  }

  return (
    <div>
      <select disabled={disabled} value={streetId} onChange={handleChangeStreet}>
        {newStreetNames.map((obj) => {
          return (
            <option key={obj.id} value={obj.id}>
              {obj.streetName}
            </option>
          );
        })}
      </select>
    </div>
  );
};
