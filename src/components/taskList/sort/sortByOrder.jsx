import React, {useCallback} from 'react';
import './sortByOrder.scss';

export const SortByOrder = ({setTask, doneMode}) => {
  // console.log(doneMode);

  // console.log(doneMode ? 1 : 0);

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

  return (
    <div className="sort">
      <ul className="sort__table-head">
        <li className="sort__table-title">
          Дата под.
          <div className="sort__by-date">
            <span className="sort__arrow-bottom" onClick={sortByAddAsc}></span>
            <span className="sort__arrow-top" onClick={sortByAddDesc}></span>
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
