import React, {useCallback, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {registerLocale, setDefaultLocale} from 'react-datepicker';
import './rangeCalendar.scss';
import uk from 'date-fns/locale/uk';
registerLocale('uk', uk);

export const RangeCalendar = ({setTask, type, setIsLoaded, doneMode, fetchTasks}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const fetchRangeTasks = useCallback(() => {
    //Fix range of days bug(datePikr show incorrect range of days)
    let from = new Date(startDate);
    from.setDate(from.getDate() + 1);
    // console.log(from + ' + 1 day');

    let to = new Date(endDate);
    to.setDate(to.getDate() + 1);
    // console.log(to + ' + 1 day');

    fetch(process.env.REACT_APP_URL_RANGE_SEARCH, {
      method: 'post',
      mode: 'cors',
      withCredentials: true,
      body: JSON.stringify({
        done: doneMode,
        from: from,
        to: to,
        type: type,
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
          setTask(result.values);
        },
        (error) => {
          setIsLoaded(true);
          // setError(error);
        },
      );
  }, [setIsLoaded, setTask, startDate, endDate, doneMode, type]);

  const onChangeRange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    // console.log(dates);
  };

  const onClosefetchRange = () => {
    if (endDate === null) {
      return;
    }
    if (startDate === null && endDate === null) {
      console.log(!startDate && !endDate);
      fetchTasks();
    } else {
      fetchRangeTasks();
    }
  };

  return (
    <div className="range-calendar">
      <DatePicker
        className="range-calendar__input"
        locale="uk"
        dateFormat="yyyy-MM-dd"
        placeholderText="Обрати діапазон дат"
        selected={startDate}
        onChange={onChangeRange}
        onCalendarClose={onClosefetchRange}
        startDate={startDate}
        endDate={endDate}
        selectsRange={true}
        isClearable={true}
        withPortal
      />
    </div>
  );
};
