import React from 'react';

export const PriorityBtns = ({editMode, task, setTask, priority, setPriority, type, setType}) => {
  function setTypeConnection(e) {
    e.preventDefault();
    task.filter((item) => {
      if (item.id === editMode) {
        setType(1);
        item.type = type;
      }
      return item;
    });
  }

  const classNameConnection =
    type === 1 ? 'add-task__options-btn connection' : 'add-task__options-btn ';

  function setTypeFaq(e) {
    e.preventDefault();
    task.filter((item) => {
      if (item.id === editMode) {
        setType(2);
        item.type = type;
      }
      return item;
    });
  }

  const classNameFaq = type === 2 ? 'add-task__options-btn faq' : 'add-task__options-btn';

  function setPriorityCritical(e) {
    e.preventDefault();
    task.filter((item) => {
      if (item.id === editMode) {
        setPriority(1);
        item.priority = priority;
      }
      return item;
    });
  }

  const classNameCritical =
    priority === 1 ? 'add-task__priority-btn critical' : 'add-task__priority-btn';

  function setPriorityImportant(e) {
    e.preventDefault();
    task.filter((item) => {
      if (item.id === editMode) {
        setPriority(2);
        item.priority = priority;
      }
      return item;
    });
  }

  const classNameImportant =
    priority === 2 ? 'add-task__priority-btn important' : 'add-task__priority-btn';

  function setPriorityRegular(e) {
    e.preventDefault();
    task.filter((item) => {
      if (item.id === editMode) {
        setPriority(3);
        item.priority = priority;
      }
      return item;
    });
  }

  const classNameRegular =
    priority === 3 ? 'add-task__priority-btn regular' : 'add-task__priority-btn';

  return (
    <div className="add-task__options">
      <div className="add-task__options-type">
        <button className={classNameConnection} onClick={setTypeConnection}>
          Подключение
        </button>
        <button className={classNameFaq} onClick={setTypeFaq}>
          Фак
        </button>
      </div>
      <div className="add-task__options-priority">
        <button className={classNameCritical} onClick={setPriorityCritical}>
          Критично
        </button>
        <button className={classNameImportant} onClick={setPriorityImportant}>
          Важливо
        </button>
        <button className={classNameRegular} onClick={setPriorityRegular}>
          Звичайна
        </button>
      </div>
    </div>
  );
};
