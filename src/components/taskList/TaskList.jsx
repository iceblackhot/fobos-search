import React from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import './taskList.scss';

export const TaskList = ({
  task,
  setTask,
  setModalActive,
  setFio,
  setMobileNum,
  setSity,
  setStreet,
  setHouse,
  setSection,
  setFlat,
  setEntrance,
  setFloor,
  setOptionStatus,
  setDate,
  setNote,
  setOptionWorker,
  editMode,
  setEditMode,
}) => {
  function deleteTask(e, id) {
    e.stopPropagation();
    let newTask = [...task].filter((item) => item.id !== id);
    setTask(newTask);
  }

  function statusTask(e, id) {
    e.stopPropagation();
    let newTask = [...task].filter((item) => {
      if (item.id === id) {
        item.editNote = !item.editNote;
      }
      return item;
    });
    setTask(newTask);
  }

  function editTask(
    fio,
    mobile,
    sity,
    street,
    house,
    section,
    flat,
    entrance,
    floor,
    optionStatus,
    date,
    note,
    optionWorker,
  ) {
    setModalActive(true);
    setEditMode(true);
    setFio(fio);
    setMobileNum(mobile);
    setSity(sity);
    setStreet(street);
    setHouse(house);
    setSection(section);
    setFlat(flat);
    setEntrance(entrance);
    setFloor(floor);
    setOptionStatus(optionStatus);
    setDate(date);
    setNote(note);
    setOptionWorker(optionWorker);
  }

  function handleClick() {
    setModalActive(true);
    setEditMode(false);
  }

  console.log(task);

  return (
    <div className="task-list">
      <div className="task-list__title">
        <h1>Всего заявок</h1>
        <span>{task.length}</span>
      </div>
      <div className="task-list__add-btn">
        <button onClick={handleClick}>Создать заявку</button>
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
      </ul>
      <ul className="task-list__list">
        {task.map((item) => (
          <li
            key={item.id}
            className={!item.editNote ? 'task-list__item ' : 'task-list__item edit'}
            onClick={() => {
              if (item.editNote) {
                editTask(
                  item.fio,
                  item.mobile,
                  item.sity,
                  item.street,
                  item.house,
                  item.section,
                  item.flat,
                  item.entrance,
                  item.floor,
                  item.optionStatus,
                  item.date,
                  item.note,
                  item.optionWorker,
                );
              }
            }}>
            <>
              <div className="task-list__item-cell">{item.dateNow}</div>
              <div className="task-list__item-cell">{item.sity}</div>
              <div className="task-list__item-cell">
                {item.street}
                {'д.' + item.house}
                {'секц.' + item.section}
                {'кв.' + item.flat}
                {'под.' + item.entrance}
                {'эт.' + item.floor}
              </div>
              <div className="task-list__item-cell">
                {item.option} {item.date}
              </div>
              <div className="task-list__item-cell">{item.fio}</div>
              <div className="task-list__item-cell">{item.mobile}</div>
              <div className="task-list__item-cell">{item.note}</div>
              <div className="task-list__item-cell">{item.worker}</div>
              <div style={{display: 'flex'}}>
                <DeleteForeverOutlinedIcon onClick={(e) => deleteTask(e, item.id)}>
                  Удалить
                </DeleteForeverOutlinedIcon>
                <div onClick={(e) => statusTask(e, item.id)}>
                  {item.editNote ? <LockOpenRoundedIcon /> : <LockRoundedIcon />}
                </div>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};
