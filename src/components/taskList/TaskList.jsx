import React, {useState} from 'react';

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
    <div>
      {task.map((item) => (
        <div key={item.id}>
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
        </div>
      ))}
    </div>
  );
};
