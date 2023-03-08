import './taskListTableHeader.scss';

export const TaskListTableHeader = () => {
  return (
    <div id="noPrint" className="sort">
      <ul className="sort__table-head">
        <li className="sort__table-title">
          Дата створ.
          <div className="sort__by-date"></div>
        </li>
        <li className="sort__table-title">Місто</li>
        <li className="sort__table-title">Адреса</li>
        <li className="sort__table-title">Статус/Запл.дата</li>
        <li className="sort__table-title">ФІО</li>
        <li className="sort__table-title">Телефон</li>
        <li className="sort__table-title">Коментар</li>
        <li className="sort__table-title">Співробітник</li>
      </ul>
    </div>
  );
};
