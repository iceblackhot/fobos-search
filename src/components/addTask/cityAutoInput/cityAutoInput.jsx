import React, {useState} from 'react';
import Select from 'react-select';
import './cityAutoInput.scss';

export const CityAutoInput = ({
  setCity,
  cityId,
  setCityId,
  cityNames,
  setFiltered,
  task,
  cityReactSelectValue,
  setReactCitySelectValue,
  setStreet,
  setStreetId,
}) => {
  const options = cityNames.map((cityObj) => ({
    value: cityObj.id,
    label: cityObj.cityName,
  }));

  function handleChangeCity(event) {
    // console.log(event === null);
    // console.log(event);
    // if (!event) {
    //   event = {
    //     value: '',
    //     label: '',
    //   };
    //   console.log(event.value);
    //   setCity('');
    //   setCityId('');
    //   setStreet('');
    //   setStreetId('');
    // } else {
    //   setCity(event.label);
    //   setCityId(event.value);
    // }
    if (event) {
      setCity(event.label);
      setCityId(event.value);
    } else {
      setCity('');
      setCityId('');
      setStreet('');
      setStreetId('');
    }
  }

  // console.log(cityNames);

  return (
    <div>
      <Select
        classNamePrefix="custom-select"
        onChange={handleChangeCity}
        options={options}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable
        placeholder="Обрати місто"
        loadingMessage={() => 'Пошук...'}
        isLoading={!cityNames.length ? true : false}
        hideSelectedOptions
      />
    </div>
  );
};
