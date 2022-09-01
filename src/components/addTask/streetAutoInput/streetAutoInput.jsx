import React, {useState} from 'react';
import Select from 'react-select';
import './streetAutoInput.scss';

export const StreetAutoInput = ({
  setStreet,
  street,
  streetId,
  setStreetId,
  streetNames,
  cityId,
}) => {
  let newStreetNames = [...streetNames].filter((streetObj) => streetObj.cityId === cityId);

  const options = newStreetNames.map((streetObj) => ({
    value: streetObj.id,
    label: streetObj.streetName,
  }));

  // console.log(options);

  function handleChangeStreet(event) {
    // console.log(event === null);
    if (event) {
      setStreet(event.label);
      setStreetId(event.value);
    } else {
      setStreet('');
      setStreetId('');
    }
  }

  // console.log(street);

  return (
    <div>
      <Select
        value={options.filter((option) => option.label === street)}
        classNamePrefix="custom-select"
        onChange={handleChangeStreet}
        options={options}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable
        placeholder="Обрати вулицю"
        loadingMessage={() => 'Пошук...'}
        isLoading={!streetNames.length ? true : false}
        isDisabled={!cityId ? true : false}
        hideSelectedOptions
      />
    </div>
  );
};
