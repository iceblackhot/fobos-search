import React from 'react';

export const PriorityBtns = ({
  editMode,
  task,
  setTask,
  faq,
  setFaq,
  setConnection,
  connection,
  setImportant,
  important,
  setCritical,
  critical,
  setRegular,
  regular,
}) => {
  function newConnectionTask(e) {
    e.preventDefault();
    setConnection(true);
    setFaq(false);
    let newTask = [...task].filter((item) => {
      if (item.id === editMode) {
        item.newConnection = !item.newConnection;
      }
      return item;
    });
    setTask(newTask);
  }

  const classNameConnection = connection
    ? 'add-task__options-btn connection'
    : 'add-task__options-btn ';

  function newConnectionFaq(e) {
    e.preventDefault();
    setConnection(false);
    setFaq(true);
    let newTask = [...task].filter((item) => {
      if (item.id === editMode) {
        item.faq = !item.faq;
      }
      return item;
    });
    setTask(newTask);
  }

  const classNameFaq = faq ? 'add-task__options-btn faq' : 'add-task__options-btn';

  function priorityCritical(e) {
    e.preventDefault();
    setCritical(true);
    setImportant(false);
    setRegular(false);
    let newTask = [...task].filter((item) => {
      if (item.id === editMode) {
        item.statCritical = !item.statCritical;
      }
      return item;
    });
    setTask(newTask);
  }

  const classNameCritical = critical ? 'add-task__priority-btn critical' : 'add-task__priority-btn';

  function priorityImportant(e) {
    e.preventDefault();
    setCritical(false);
    setImportant(true);
    setRegular(false);
    let newTask = [...task].filter((item) => {
      if (item.id === editMode) {
        item.important = !item.important;
      }
      return item;
    });
    setTask(newTask);
  }

  const classNameImportant = important
    ? 'add-task__priority-btn important'
    : 'add-task__priority-btn';

  function priorityRegular(e) {
    e.preventDefault();
    setCritical(false);
    setImportant(false);
    setRegular(true);
    let newTask = [...task].filter((item) => {
      if (item.id === editMode) {
        item.regular = !item.regular;
      }
      return item;
    });
    setTask(newTask);
  }

  const classNameRegular = regular ? 'add-task__priority-btn regular' : 'add-task__priority-btn';

  return (
    <div className="add-task__options">
      <div className="add-task__options-type">
        <button className={classNameConnection} onClick={newConnectionTask}>
          Подключение
        </button>
        <button className={classNameFaq} onClick={newConnectionFaq}>
          Фак
        </button>
      </div>
      <div className="add-task__options-priority">
        <button className={classNameCritical} onClick={priorityCritical}>
          Критично
        </button>
        <button className={classNameImportant} onClick={priorityImportant}>
          Важно
        </button>
        <button className={classNameRegular} onClick={priorityRegular}>
          Обычная
        </button>
      </div>
    </div>
  );
};
