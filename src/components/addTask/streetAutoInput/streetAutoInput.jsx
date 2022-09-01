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
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

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
      setSelectedOption(event.label);
    } else {
      setStreet('');
      setStreetId('');
    }
  }

  function handleInputChange(inputValue, action) {
    if (action.action !== 'input-blur' && action.action !== 'menu-close') {
      setInputValue(inputValue);
      console.log(action);
    }
  }

  function getValueOption(action, selectedOption) {
    if (action.action !== 'set-value' && action.action !== 'menu-close') {
      console.log(selectedOption);
    }
  }

  return (
    <div>
      <Select
        value={options.filter((option) => {
          console.log(option);
          return option.label === selectedOption;
        })}
        // value={selectedOption}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        getOptionValue={getValueOption}
        classNamePrefix="custom-select"
        onChangeStreet={handleChangeStreet}
        options={options}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable
        placeholder="Обрати вулицю"
        loadingMessage={() => 'Пошук...'}
        isLoading={!streetNames.length ? true : false}
        // isDisabled={!cityId ? true : false}
        hideSelectedOptions
      />
    </div>
  );
};
