import React, {useState} from 'react';
import './filters.scss';

export const Filters = ({filtered, setFiltered, task, setTask}) => {
  const [sityValue, setSityValue] = useState('');
  const [streetValue, setStreetValue] = useState('');
  const [length, setLength] = useState('');

  const [sity, setSity] = useState([
    {sityId: 1, name: 'Горишни Плавни'},
    {sityId: 2, name: 'Келеберда'},
    {sityId: 3, name: 'Григоро-Бригадировка'},
    {sityId: 4, name: 'Дмитровка'},
    {sityId: 5, name: 'Дружба'},
    {sityId: 6, name: 'Золотнище'},
    {sityId: 7, name: 'Коноплянка'},
    {sityId: 8, name: 'Мотрино'},
    {sityId: 9, name: 'Озера'},
    {sityId: 10, name: 'Подубное'},
    {sityId: 11, name: 'Пришиб'},
    {sityId: 12, name: 'Решетиловка'},
    {sityId: 13, name: 'Саловка'},
    {sityId: 14, name: 'Солошино'},
    {sityId: 15, name: 'Хорол'},
    {sityId: 16, name: 'Юнность'},
  ]);

  function showFilterSity(id, name) {
    if (!sityValue) {
      setFiltered(task);
    }
    if (sityValue) {
      let filterSity = [...task].filter((sityName) => sityName.sity === name);
      setFiltered(filterSity);
      setLength(filterSity.length);
    }
  }

  // console.log(sityValue);

  return (
    <div className="search-filters">
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input
              placeholder="Город"
              className="search-filters__input"
              type="text"
              value={sityValue}
              onChange={(e) => setSityValue(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setSityValue('');
                setFiltered(task);
              }}>
              Сброс
            </button>
          </form>
        </div>
        <div className="search-filters__viewport">
          <ul className="search-filters__list">
            {sity.map((item, index) => (
              <li
                className="search-filters__item"
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setSityValue(item.name);
                  showFilterSity(item.sityId, item.name);
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
