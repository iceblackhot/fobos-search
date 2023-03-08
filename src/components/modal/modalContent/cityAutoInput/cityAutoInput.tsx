import {useState, useEffect} from 'react';
import Select from 'react-select';
import {useAppContext} from '../../../appContext/appContext';
import './cityAutoInput.scss';

type OptionTypeCity = {
  value: number;
  label: string;
};

type OptionTypeStreet = {
  cityId: number;
  value: number;
  label: string;
};

export const CityAutoInput = () => {
  const {filterCityList, filterStreetList, formData, filterTaskDone, setFormData} = useAppContext();

  const [curValueCity, setCurValueCity] = useState<OptionTypeCity | null>(null);

  const [curValueStreet, setCurValueStreet] = useState<OptionTypeStreet | null>(null);

  useEffect(() => {
    if (formData) {
      if (formData.cityId > 0) {
        setCurValueCity({value: formData.cityId, label: formData.cityName});

        if (formData.streetId > 0) {
          setCurValueStreet({
            cityId: formData.cityId,
            value: formData.streetId,
            label: formData.streetName,
          });
        } else {
          setCurValueStreet(null);
        }
      } else {
        setCurValueCity(null);
        setCurValueStreet(null);
      }
    }
  }, [formData]);

  return (
    <div className="modal-content__inputs-adress_wrapper">
      <Select
        className={formData.cityId === 0 ? 'css-1s2u09g-control error' : 'css-1s2u09g-control'}
        id={formData.cityId === 0 ? 'cityAutoInput-error' : 'cityAutoInput'}
        value={curValueCity}
        classNamePrefix="custom-select"
        options={filterCityList.map((opt) => ({value: opt.id, label: opt.name}))}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable
        placeholder="Обрати місто"
        loadingMessage={() => 'Пошук...'}
        isLoading={!filterCityList.length ? true : false}
        hideSelectedOptions
        onChange={(newValue) => {
          if (newValue) {
            // console.log(newValue);
            setFormData({type: 'SET_FIELD', field: 'cityId', payload: newValue.value});
            setFormData({type: 'SET_FIELD', field: 'cityName', payload: newValue.label});
            setCurValueCity(newValue);
            setCurValueStreet(null);
          } else {
            setFormData({type: 'SET_FIELD', field: 'cityId', payload: 0});
            setFormData({type: 'SET_FIELD', field: 'cityName', payload: ''});
            setFormData({type: 'SET_FIELD', field: 'streetId', payload: 0});
            setFormData({type: 'SET_FIELD', field: 'streetName', payload: ''});
            setCurValueCity(null);
            setCurValueStreet(null);
          }
        }}
        isDisabled={formData?.id > 0 && filterTaskDone === 1 && true}
      />
      <Select
        id="streetAutoInput"
        classNamePrefix="custom-select"
        value={curValueStreet}
        options={filterStreetList
          .filter((opt) => {
            if (opt.cityId === curValueCity?.value) return true;
          })
          .map((opt) => ({
            cityId: opt.cityId,
            value: opt.id,
            label: opt.name,
          }))}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable
        placeholder="Обрати вулицю"
        loadingMessage={() => 'Пошук...'}
        isLoading={!filterStreetList.length ? true : false}
        onChange={(newValue) => {
          if (newValue) {
            setFormData({type: 'SET_FIELD', field: 'streetId', payload: newValue.value});
            setFormData({type: 'SET_FIELD', field: 'streetName', payload: newValue.label});
            setCurValueStreet(newValue);
          } else {
            setFormData({type: 'SET_FIELD', field: 'streetId', payload: 0});
            setFormData({type: 'SET_FIELD', field: 'streetName', payload: ''});
            setCurValueStreet(null);
          }
        }}
        isDisabled={formData?.id > 0 && filterTaskDone === 1 && true}
      />
    </div>
  );
};
