import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {Russian} from 'flatpickr/dist/l10n/ru.js';
import ClearIcon from '@mui/icons-material/Clear';
import {useAppContext} from '../../../appContext/appContext';

export const PlannedDateCalendar = () => {
  const {formData, filterTaskDone, setFormData} = useAppContext();
  let {calendarCrutch, calendar} = useAppContext();
  // console.log(date + ' ' + typeof date);

  const clearDate = () => {
    setFormData({type: 'SET_FIELD', field: 'planDate', payload: ''});
  };

  return (
    <div style={{position: 'relative', width: '32%', paddingRight: '0'}}>
      <Flatpickr
        style={{width: '100%'}}
        placeholder="Запланована дата"
        data-enable-time
        value={formData?.planDate}
        options={{
          defaultDate: 'today',
          minDate: '01.01.2020',
          maxDate: '01.01.2025',
          time_24hr: true,
          dateFormat: 'Y-m-d H:i:ss',
          locale: Russian,
        }}
        onOpen={(dates, currentDateString, self) => {
          calendarCrutch = true;
          calendar = self;
        }}
        onClose={(dates, currentDateString, self) => {
          calendarCrutch = false;
          calendar = null;
        }}
        onChange={(selectedDates, dateStr, instance) => {
          // instance.close();
          // console.log(selectedDates === null);
          // console.log(dateStr);
          // console.log(instance);
          setFormData({type: 'SET_FIELD', field: 'planDate', payload: dateStr});
          // console.log(formData);
        }}
        disabled={formData?.id > 0 && filterTaskDone === 1 && true}
      />
      {filterTaskDone === 0 && (
        <ClearIcon
          style={{
            position: 'absolute',
            top: '0.4rem',
            right: '0.4rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
          }}
          onClick={clearDate}
        />
      )}
    </div>
  );
};
