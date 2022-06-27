import React, {useState} from 'react';

export const AddTask = ({task, setTask}) => {
  const [value, setValue] = useState('');

  function saveTask() {
    if (!value) {
      return;
    } else {
      setTask([
        ...task,
        {
          id: Math.random().toString(36).substring(2, 9),
          title: value,
          status: true,
        },
      ]);
    }
    setValue('');
  }

  return (
    <div>
      <input
        placeholder="текст заявки"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTask}>Сохранить</button>
    </div>
  );
};
