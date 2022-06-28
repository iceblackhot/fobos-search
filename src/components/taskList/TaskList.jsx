import React, {useState} from 'react';

import './taskList.scss';

export const TaskList = ({task, setTask}) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  function deleteTask(id) {
    let newTask = [...task].filter((item) => item.id !== id);
    setTask(newTask);
  }

  function saveTask(id) {
    let newTask = [...task].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTask(newTask);
    setEdit(null);
  }

  function statusTask(id) {
    let newTask = [...task].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTask(newTask);
  }

  function editTask(id, title) {
    setEdit(id);
    setValue(title);
  }

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
        <li className="task-list__table-title">Комментарий</li>
        <li className="task-list__table-title">Сотрудник</li>
      </ul>
      <ul className="task-list__list">
        {task.map((item) => (
          <li key={item.id} className="task-list__item">
            {edit === item.id ? (
              <div>
                <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
              </div>
            ) : (
              <div>{item.title}</div>
            )}
            {edit === item.id ? (
              <div>
                <button onClick={() => saveTask(item.id)}>Сохранить</button>
              </div>
            ) : (
              <div>
                <button onClick={() => deleteTask(item.id)}>Удалить</button>
                <button onClick={() => editTask(item.id, item.title)}>Редактировать</button>
                <button onClick={() => statusTask(item.id)}>Открыть / Закрыть</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
