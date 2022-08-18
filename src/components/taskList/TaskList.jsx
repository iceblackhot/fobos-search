import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import './taskList.scss';
import './print.scss';

export const TaskList = ({
  task,
  setTask,
  setModalActive,
  setFirstName,
  setLastName,
  setPatronymic,
  setMobileNum,
  setCity,
  setCityId,
  setStreet,
  setStreetId,
  setBuilding,
  setSection,
  setApartment,
  setEntrance,
  setFloor,
  setStatus,
  setPlanDate,
  setComment,
  setWorker,
  setWorkerId,
  editMode,
  setConnection,
  setFaq,
  setCritical,
  setImportant,
  setRegular,
  setEditMode,
  filtered,
  setStatusId,
  btnActive,
}) => {
  const printContentRef = useRef();

  const classTask = `task-list${btnActive ? ' active' : ''}`;

  const classTaskList = `task-list__list${btnActive ? ' active' : ''}`;

  function deleteTask(e, id) {
    e.stopPropagation();
    let newTask = [...task].filter((item) => item.id !== id);
    setTask(newTask);
  }

  function statusTask(e, id) {
    // e.stopPropagation();
    let newTask = [...task].filter((item) => {
      if (item.id === id) {
        item.editNote = !item.editNote;
      }
      return item;
    });
    setTask(newTask);
  }

  function showEditModal(
    fname,
    lname,
    patronymic,
    mobile,
    city,
    cityId,
    street,
    streetId,
    building,
    section,
    apartment,
    entrance,
    floor,
    status,
    statusId,
    planDate,
    comment,
    worker,
    workerId,
    faq,
    newConnection,
    critical,
    important,
    regular,
  ) {
    setModalActive(true);
    setFirstName(fname);
    setLastName(lname);
    setPatronymic(patronymic);
    setMobileNum(mobile);
    setCity(city);
    setCityId(cityId);
    setStreet(street);
    setStreetId(streetId);
    setBuilding(building);
    setSection(section);
    setApartment(apartment);
    setEntrance(entrance);
    setFloor(floor);
    setStatus(status);
    setStatusId(statusId);
    setPlanDate(planDate);
    setComment(comment);
    setWorker(worker);
    setWorkerId(workerId);
    setFaq(faq);
    setConnection(newConnection);
    setCritical(critical);
    setImportant(important);
    setRegular(regular);
  }

  function handleClick() {
    setModalActive(true);
    setEditMode(false);
    setFirstName('');
    setLastName('');
    setPatronymic('');
    setMobileNum('');
    setCityId('');
    setStreetId('');
    setBuilding('');
    setSection('');
    setApartment('');
    setEntrance('');
    setFloor('');
    setStatus('');
    setStatusId('');
    setPlanDate('');
    setComment('');
    setWorker('');
    setWorkerId('');
    setConnection(false);
    setFaq(false);
    setCritical(false);
    setImportant(false);
    setRegular(false);
  }

  console.log(task);

  return (
    <div className={classTask}>
      <div className="task-list__title">
        <h1>Всего заявок</h1>
        <span>{task.length}</span>
      </div>
      <div className="task-list__add-btn">
        <button onClick={handleClick}>Создать заявку</button>
        <ReactToPrint
          trigger={() => {
            return <button>Печать</button>;
          }}
          content={() => printContentRef.current}
        />
      </div>
      <ul className="task-list__table-head">
        <li className="task-list__table-title">Дата подачи</li>
        <li className="task-list__table-title">Город</li>
        <li className="task-list__table-title">Адрес</li>
        <li className="task-list__table-title">Статус</li>
        <li className="task-list__table-title">ФИО</li>
        <li className="task-list__table-title">Телефон</li>
        <li className="task-list__table-title">Комментарий</li>
        <li className="task-list__table-title">Сотрудник</li>
        <li className="task-list__table-title">Вып</li>
      </ul>
      <ul className={classTaskList} ref={printContentRef}>
        {filtered.map((item) => (
          <li
            key={item.id}
            className={editMode === item.id ? 'task-list__item edit' : 'task-list__item '}
            onClick={() => {
              setEditMode(item.id);
              if (editMode === item.id) {
                statusTask(item.id);
                // console.log(editMode === item.id);
                showEditModal(
                  item.addDate,
                  item.fname,
                  item.lname,
                  item.patronymic,
                  item.mobile,
                  item.cityName,
                  item.cityId,
                  item.streetName,
                  item.streetId,
                  item.building,
                  item.section,
                  item.apartment,
                  item.entrance,
                  item.floor,
                  item.statusName,
                  item.statusId,
                  item.planDate,
                  item.comment,
                  item.workerName,
                  item.workerId,
                  item.faq,
                  item.newConnection,
                  item.statCritical,
                  item.statImportant,
                  item.statRegular,
                );
              }
            }}>
            <>
              <div id="noPrint" className="task-list__item-cell">
                {item.addDate}
              </div>
              <div className="task-list__item-cell">
                {item.statCritical && (
                  <WarningAmberRoundedIcon id="noPrint" style={{color: 'red'}} />
                )}
                {item.statImportant && (
                  <ReportGmailerrorredRoundedIcon id="noPrint" style={{color: '#f4a261'}} />
                )}
                {item.statRegular && (
                  <LibraryBooksRoundedIcon id="noPrint" style={{color: '#2dcf40'}} />
                )}
                {item.cityName}
              </div>
              <div className="task-list__item-cell">
                <span>
                  {'ул.' +
                    item.streetName +
                    ' д.' +
                    item.building +
                    ' секц.' +
                    item.section +
                    ' кв.' +
                    item.apartment +
                    ' под.' +
                    item.entrance +
                    ' эт.' +
                    item.floor}
                </span>
              </div>
              <div className="task-list__item-cell">
                <span id="noPrint">{item.statusName}</span>
                <span>{item.planDate}</span>
              </div>

              <div className="task-list__item-cell">
                <span>{item.lname}</span>
                <span>{item.fname}</span>
                <span>{item.patronymic}</span>
              </div>
              <div className="task-list__item-cell">
                <span>{item.mobile}</span>
              </div>
              <div className="task-list__item-cell">
                <span>{item.comment}</span>
              </div>
              <div id="noPrint" className="task-list__item-cell">
                <span>{item.workerName}</span>
              </div>
              <div className="task-list__item-cell">
                <TaskAltIcon
                  style={{fontSize: '1.2rem', color: '#84c4ff'}}
                  id="noPrint"
                  onClick={(e) => deleteTask(e, item.id)}>
                  Удалить
                </TaskAltIcon>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};
