import React, {useState} from 'react';
import './filters.scss';

export const Filters = ({filtered, setFiltered, task, setTask}) => {
  const [cityValue, setCityValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [length, setLength] = useState('');

  const [city, setCity] = useState([
    {cityId: 1, name: 'Горишни Плавни'},
    {cityId: 2, name: 'Келеберда'},
    {cityId: 3, name: 'Григоро-Бригадировка'},
    {cityId: 4, name: 'Дмитровка'},
    {cityId: 5, name: 'Дружба'},
    {cityId: 6, name: 'Золотнище'},
    {cityId: 7, name: 'Коноплянка'},
    {cityId: 8, name: 'Мотрино'},
    {cityId: 9, name: 'Озера'},
    {cityId: 10, name: 'Подубное'},
    {cityId: 11, name: 'Пришиб'},
    {cityId: 12, name: 'Решетиловка'},
    {cityId: 13, name: 'Саловка'},
    {cityId: 14, name: 'Солошино'},
    {cityId: 15, name: 'Хорол'},
    {cityId: 16, name: 'Юнность'},
  ]);

  function showFiltercity(id, name) {
    if (!cityValue) {
      setFiltered(task);
    }
    if (cityValue) {
      let filterCity = [...task].filter((cityName) => cityName.city === name);
      setFiltered(filterCity);
      setLength(filterCity.length);
    }
  }

  // console.log(cityValue);

  return (
    <div className="search-filters">
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input
              placeholder="Город"
              className="search-filters__input"
              type="text"
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setCityValue('');
                setFiltered(task);
              }}>
              Сброс
            </button>
          </form>
        </div>
        <div className="search-filters__viewport">
          <ul className="search-filters__list">
            {city.map((item, index) => (
              <li
                className="search-filters__item"
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCityValue(item.name);
                  showFiltercity(item.cityId, item.name);
                }}>
                {item.name}
                {' ' + length}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input
              placeholder="Улица"
              value={streetValue}
              className="search-filters__input"
              type="text"
              onChange={(e) => {
                setStreetValue(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setStreetValue('');
              }}>
              Сброс
            </button>
          </form>
        </div>
        <div className="search-filters__viewport"></div>
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Статус" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport"></div>
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Сотрудник" className="search-filters__input" type="text" />
            <button>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport"></div>
      </div>
    </div>
  );
};
