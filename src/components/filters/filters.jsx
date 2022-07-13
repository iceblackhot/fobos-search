import React, {useState} from 'react';
import './filters.scss';

export const Filters = () => {
  const [sity, setSity] = useState([
    {sity: 'Горишни Плавни'},
    {sity: 'Келеберда'},
    {sity: 'Григоро-Бригадировка'},
    {sity: 'Дмитровка'},
    {sity: 'Дружба'},
    {sity: 'Золотнище'},
    {sity: 'Коноплянка'},
    {sity: 'Мотрино'},
    {sity: 'Озера'},
    {sity: 'Подубное'},
    {sity: 'Пришиб'},
    {sity: 'Решетиловка'},
    {sity: 'Саловка'},
    {sity: 'Солошино'},
    {sity: 'Хорол'},
    {sity: 'Юнность'},
  ]);

  const [sityValue, setSityValue] = useState('');

  const filtredSity = sity.filter((sity) => {
    return sity.sity.toLowerCase().includes(sityValue.toLowerCase());
  });

  function handleChangeSity(sity) {
    // setSity(sity);
    // console.log(sity);
  }

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
            <button onClick={() => setSityValue('')}>Сброс</button>
          </form>
        </div>
        <div className="search-filters__viewport">
          <ul className="search-filters__list">
            {filtredSity.map((item, index) => (
              <li
                className="search-filters__item"
                key={index}
                onClick={handleChangeSity(item.sity)}>
                {item.sity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="search-filters__container">
        <div className="search-filters__header">
          <form>
            <input placeholder="Улица" className="search-filters__input" type="text" />
            <button>Сброс</button>
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
