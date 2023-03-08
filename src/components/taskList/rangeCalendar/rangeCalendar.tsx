import ReactDatePicker from 'react-datepicker';
import './rangeCalendar.scss';
import 'react-datepicker/dist/react-datepicker.css';
import {registerLocale} from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import {useAppContext} from '../../appContext/appContext';
registerLocale('uk', uk);

export const RangeCalendar = () => {
  const {filterDateStart, filterDateEnd, setFilterDateStart, setFilterDateEnd} = useAppContext();

  // console.log(filterDateStart);

  const onChangeRange = (dates: any) => {
    const [start, end] = dates;

    if (start || end) {
      setFilterDateStart(start);
      setFilterDateEnd(end);
    } else {
      dates[0] = null;
      dates[1] = null;
      setFilterDateStart(start);
      setFilterDateEnd(end);
    }

    console.log(dates);
  };

  return (
    <div className="range-calendar">
      <ReactDatePicker
        className="range-calendar__input"
        locale="uk"
        dateFormat="yyyy-MM-dd"
        placeholderText="Обрати діапазон дат"
        adjustDateOnChange={false}
        selected={filterDateStart}
        onChange={onChangeRange}
        startDate={filterDateStart}
        endDate={filterDateEnd}
        selectsRange={true}
        isClearable={true}
        withPortal
      />
    </div>
  );
};
