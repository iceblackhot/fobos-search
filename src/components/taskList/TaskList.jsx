import React, {useState} from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';

import './taskList.scss';
import Modal from '../modal/modal';

export const TaskList = ({task, setTask}) => {
  const [modalActive, setModalActive] = useState(false);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  function deleteTask(id) {
    let newTask = [...task].filter((item) => item.id !== id);
    setTask(newTask);
  }

  function saveTask(e, id) {
    e.stopPropagation();

    let newTask = [...task].map((item) => {
      if (item.id === id) {
        item.fio = value;
        // console.log(value);
      }
      return item;
    });
    setTask(newTask);
    setEdit(null);
  }

  function statusTask(e, id) {
    e.stopPropagation();
    let newTask = [...task].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTask(newTask);
  }

  function editTask(id, fio) {
    setModalActive(true);
    setEdit(id);
    setValue(fio);
  }

  // console.log(task);
  let dateNow = new Date();

  return (
    <div className="task-list">
      <div className="task-list__title">
        <h1>Всего заявок</h1>
        <span>{task.length}</span>
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
            className={!item.status ? 'task-list__item close' : 'task-list__item'}
            onClick={(e) => editTask(item.id, item.fio)}>
            {edit === item.id ? (
              <Modal active={modalActive} setActive={setModalActive}>
                <div>
                  <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                </div>
                <div>
                  <button onClick={(e) => saveTask(e, item.id)}>Сохранить</button>
                </div>
              </Modal>
            ) : (
              <>
                <div className="task-list__item-cell">{dateNow.toLocaleString()}</div>
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
              </>
            )}
            {console.log(edit === item.id)}
            {edit === item.id ? (
              ''
            ) : (
              <div style={{display: 'flex'}}>
                <DeleteForeverOutlinedIcon onClick={(e) => deleteTask(item.id)}>
                  Удалить
                </DeleteForeverOutlinedIcon>
                <div onClick={(e) => statusTask(e, item.id)}>
                  {item.status ? <LockOpenRoundedIcon /> : <LockRoundedIcon />}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
