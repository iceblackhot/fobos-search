import React, {useCallback} from 'react';
import {useState} from 'react';
import './sortByOrder.scss';

export const SortByOrder = ({setTask, doneMode}) => {
  const [arrowActv, setArrowActv] = useState(false);

  const classNameArrow = arrowActv ? 'sort__arrow active' : 'sort__arrow';

  const sortByAddDesc = useCallback(() => {
    let sort = ' DESC';
    let done = doneMode ? 1 : 0;
    fetch(process.env.REACT_APP_URL_SORT_BY_DATE + done, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({
        sortParam: sort,
        done: done,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.values);
          setTask(result.values);
          // setIsLoaded(true);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        },
      );
  }, [doneMode]);

  const sortByAddAsc = useCallback(() => {
    let sort = ' ASC';
    let done = doneMode ? 1 : 0;
    fetch(process.env.REACT_APP_URL_SORT_BY_DATE + done, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify({
        sortParam: sort,
        done: done,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.values);
          setTask(result.values);
          // setIsLoaded(true);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        },
      );
  }, [doneMode]);

  const changeSort = () => {
    setArrowActv(!arrowActv);
    // console.log(arrowActv);

    if (arrowActv) {
      sortByAddDesc();
    } else {
      sortByAddAsc();
    }
  };

  return (
    <div className="sort">
      <ul className="sort__table-head">
        <li className="sort__table-title">
          Дата підкл.
          <div className="sort__by-date">
            <span className={classNameArrow} onClick={changeSort}></span>
          </div>
        </li>
        <li className="sort__table-title">Місто</li>
        <li className="sort__table-title">Адреса</li>
        <li className="sort__table-title">Статус</li>
        <li className="sort__table-title">ФІО</li>
        <li className="sort__table-title">Телефон</li>
        <li className="sort__table-title">Коментар</li>
        <li className="sort__table-title">Співробітник</li>
        <li className="sort__table-title">Вик.</li>
      </ul>
    </div>
  );
};
