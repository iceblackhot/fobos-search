import React, {useState} from 'react';
import './filters.scss';

export const Filters = ({task, setTask}) => {
  const [sityValue, setSityValue] = useState('');

  let filtredSity = task.filter((sity) => {
    return sity.sity.toLowerCase().includes(sityValue.toLowerCase());
  });

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
              }}>
              Сброс
            </button>
          </form>
        </div>
        <div className="search-filters__viewport">
          <ul className="search-filters__list">
            {filtredSity.map((item, index) => (
              <li
                className="search-filters__item"
                key={index}
                onClick={() => setSityValue(item.sity)}>
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
