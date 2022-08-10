import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import './taskList.scss';
import './print.scss';
import {PrintTask} from './printTask/printTask';

export const TaskList = ({
  task,
  setTask,
  setModalActive,
  setFio,
  setMobileNum,
  setCity,
  setCityId,
  setStreet,
  setStreetId,
  setHouse,
  setSection,
  setFlat,
  setEntrance,
  setFloor,
  setStatus,
  setDate,
  setNote,
  setOptionWorker,
  editMode,
  setConnection,
  setFaq,
  setCritical,
  setImportant,
  setRegular,
  setEditMode,
  filtered,
  statusId,
  setStatusId,
}) => {
  const printContentRef = useRef();

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
    fio,
    mobile,
    city,
    cityId,
    street,
    streetId,
    house,
    section,
    flat,
    entrance,
    floor,
    status,
    statusId,
    date,
    note,
    worker,
    faq,
    newConnection,
    critical,
    important,
    regular,
  ) {
    setModalActive(true);
    setFio(fio);
    setMobileNum(mobile);
    setCity(city);
    setCityId(cityId);
    setStreet(street);
    setStreetId(streetId);
    setHouse(house);
    setSection(section);
    setFlat(flat);
    setEntrance(entrance);
    setFloor(floor);
    setStatus(status);
    setStatusId(statusId);
    setDate(date);
    setNote(note);
    setOptionWorker(worker);
    setFaq(faq);
    setConnection(newConnection);
    setCritical(critical);
    setImportant(important);
    setRegular(regular);
  }

  function handleClick() {
    setModalActive(true);
    setEditMode(false);
    setFio('');
    setMobileNum('');
    setCityId('');
    setStreetId('');
    setHouse('');
    setSection('');
    setFlat('');
    setEntrance('');
    setFloor('');
    setStatus('');
    setDate('');
    setNote('');
    setOptionWorker('');
    setConnection(false);
    setFaq(false);
    setCritical(false);
    setImportant(false);
    setRegular(false);
  }

  console.log(task);

  //Print Task function

  return (
    <div className="task-list">
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
      <ul className="task-list__list" ref={printContentRef}>
        {filtered.map((item) => (
          <li
            key={item.id}
            className={editMode === item.id ? 'task-list__item edit' : 'task-list__item '}
            onClick={() => {
              setEditMode(item.id);
              if (editMode === item.id) {
                statusTask(item.id);
                console.log(editMode === item.id);
                showEditModal(
                  item.fio,
                  item.mobile,
                  item.city,
                  item.cityId,
                  item.street,
                  item.streetId,
                  item.house,
                  item.section,
                  item.flat,
                  item.entrance,
                  item.floor,
                  item.status,
                  item.statusId,
                  item.date,
                  item.note,
                  item.worker,
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
                {item.dateNow}
              </div>
              <div className="task-list__item-cell">{item.city}</div>
              <div className="task-list__item-cell">
                <span>
                  {'ул.' +
                    item.street +
                    ' д.' +
                    item.house +
                    ' секц.' +
                    item.section +
                    ' кв.' +
                    item.flat +
                    ' под.' +
                    item.entrance +
                    ' эт.' +
                    item.floor}
                </span>
              </div>
              <div className="task-list__item-cell">
                <span>
                  {item.status}
                  <br /> {item.date}
                </span>
              </div>
              <div className="task-list__item-cell">
                <span>{item.fio}</span>
              </div>
              <div className="task-list__item-cell">
                <span>{item.mobile}</span>
              </div>
              <div className="task-list__item-cell">
                <span>{item.note}</span>
              </div>
              <div className="task-list__item-cell">
                <span>{item.worker}</span>
              </div>
              <div className="task-list__item-cell">
                <TaskAltIcon
                  style={{fontSize: '1.2rem', color: '#84c4ff'}}
                  className="no-print"
                  id="noPrint"
                  onClick={(e) => deleteTask(e, item.id)}>
                  Удалить
                </TaskAltIcon>
              </div>
              {/* <div
                className="task-list__item-cell"
                onClick={(e) => {
                  setEditMode(item.id);
                  statusTask(e, item.id);
                }}>
                {editMode === item.id ? (
                  <LockOpenRoundedIcon
                    style={{fontSize: '1.2rem', color: '#2dcf40'}}
                    className="no-print"
                    id="noPrint"
                  />
                ) : (
                  <LockRoundedIcon
                    style={{fontSize: '1.2rem', color: '#84c4ff'}}
                    className="no-print"
                    id="noPrint"
                  />
                )}
              </div> */}
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};
