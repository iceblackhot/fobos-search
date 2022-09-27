import React, {useCallback, useRef, useState} from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Russian} from 'flatpickr/dist/l10n/ru.js';
import Flatpickr from 'react-flatpickr';
import './rangeCalendar.scss';
import {useEffect} from 'react';

export const RangeCalendar = ({setIsLoaded, doneTasks}) => {
  const flatpickrRef = useRef(null);

  const [selectedData, setSelectedData] = useState({
    date: new Date(),
    from: null,
    to: null,
  });

  function clearDate() {
    flatpickrRef.current.flatpickr.clear();
    flatpickrRef.current.flatpickr.close();
  }

  const fetchRangeTasks = useCallback(() => {
    fetch(process.env.REACT_APP_URL_RANGE_SEARCH, {
      method: 'post',
      mode: 'cors',
      withCredentials: true,
      body: JSON.stringify({
        // done: doneTasks,
        from: selectedData.from,
        to: selectedData.to,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          setIsLoaded(true);
          // setTask(result.values);
        },
        (error) => {
          setIsLoaded(true);
          // setError(error);
        },
      );
  }, [setIsLoaded, selectedData.from, selectedData.to]);

  return (
    <div className="range-calendar">
      <CloseRoundedIcon className="range-calendar__ico" onClick={clearDate} />
      <Flatpickr
        className="calendar"
        placeholder="Обрати діапазон дат"
        value={selectedData.date}
        options={{
          closeOnSelect: true,
          mode: 'range',
          defaultDate: 'today',
          minDate: '01.01.2020',
          maxDate: '01.01.2025',
          dateFormat: 'Y-m-d',
          locale: Russian,
        }}
        onChange={([start, end]) => {
          if (start && end) {
            // console.log(start);
            // console.log(end);
            selectedData.from = start;
            selectedData.to = end;
            setSelectedData({...selectedData.from, ...selectedData.to});
            fetchRangeTasks();
          }
        }}
        ref={flatpickrRef}
      />
    </div>
  );
};
