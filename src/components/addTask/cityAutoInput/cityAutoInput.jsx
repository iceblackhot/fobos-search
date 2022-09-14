import React, {useState} from 'react';
import Select from 'react-select';
import './cityAutoInput.scss';

export const CityAutoInput = ({
  city,
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
  editMode,
  disabled,
}) => {
  const [cityValue, setCityValue] = useState('');

  const options = cityNames.map((cityObj) => ({
    value: cityObj.id,
    label: cityObj.cityName,
  }));

  function handleChangeCity(event) {
    // console.log(event === null);
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

  // console.log(cityId);

  return (
    <div>
      <Select
        value={cityId ? options.filter((option) => option.value === cityId) : ''}
        classNamePrefix="custom-select"
        onChange={handleChangeCity}
        options={options}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable
        placeholder="Обрати місто"
        loadingMessage={() => 'Пошук...'}
        isLoading={!cityNames.length ? true : false}
        hideSelectedOptions
        isDisabled={disabled}
      />
    </div>
  );
};
