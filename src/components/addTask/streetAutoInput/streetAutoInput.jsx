import React, {useEffect, useState} from 'react';
import './streetAutoInput.scss';

export const StreetAutoInput = ({setStreet, streetId, setStreetId, streetNames, cityId}) => {
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
    setStreetId(Number(e.currentTarget.value));
  }

  useEffect(() => {
    if (newStreetNames.length > 0) {
      setStreetId(newStreetNames[0].id);
      setStreet(newStreetNames[0].streetName);
    }
  }, [newStreetNames.length]);

  return (
    <div>
      <select
        style={{width: '100%'}}
        disabled={disabled}
        value={streetId}
        onChange={handleChangeStreet}>
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
