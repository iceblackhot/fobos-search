import React from 'react';
import Modal from '../modal/modal';
import './addTask.scss';

export const AddTask = ({
  task,
  setTask,
  modalActive,
  setModalActive,
  fio,
  setFio,
  mobileNum,
  setMobileNum,
  sity,
  setSity,
  street,
  setStreet,
  house,
  setHouse,
  section,
  setSection,
  flat,
  setFlat,
  entrance,
  setEntrance,
  floor,
  setFloor,
  optionStatus,
  setOptionStatus,
  date,
  setDate,
  note,
  setNote,
  optionWorker,
  setOptionWorker,
  connection,
  setConnection,
  faq,
  setFaq,
  critical,
  setCritical,
  important,
  setImportant,
  regular,
  setRegular,
  editMode,
}) => {
  let dateNow = new Date().toLocaleString();

  function saveTask() {
    if (!fio) {
      return;
    } else {
      setTask([
        ...task,
        {
          dateNow: dateNow,
          id: Math.random().toString(36).substring(2, 9),
          fio: fio,
          mobile: mobileNum,
          sity: sity,
          street: street,
          house: house,
          section: section,
          flat: flat,
          entrance: entrance,
          floor: floor,
          option: optionStatus,
          date: date,
          note: note,
          worker: optionWorker,
          editNote: false,
          newConnection: connection,
          faq: faq,
          statCritical: critical,
          statImportant: important,
          statRegular: regular,
        },
      ]);
    }
    setFio('');
    setMobileNum('');
    setSity('');
    setStreet('');
    setHouse('');
    setSection('');
    setFlat('');
    setEntrance('');
    setFloor('');
    setOptionStatus('');
    setDate('');
    setNote('');
    setOptionWorker('');
    setModalActive(false);
  }

  function editTask(e) {
    e.stopPropagation();
    e.preventDefault();
    let newTask = [...task].filter((item) => {
      if (item.id === editMode) {
        item.dateNow = dateNow;
        item.fio = fio;
        item.mobile = mobileNum;
        item.sity = sity;
        item.street = street;
        item.house = house;
        item.section = section;
        item.flat = flat;
        item.entrance = entrance;
        item.floor = floor;
        item.option = optionStatus;
        item.date = date;
        item.note = note;
        item.worker = optionWorker;
        item.editNote = editMode;
        item.newConnection = connection;
        item.faq = faq;
        item.statCritical = critical;
        item.statImportant = important;
        item.statRegular = regular;
      }
      return item;
    });
    setTask(newTask);
    setModalActive(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveTask();
  }

  function handleCancel() {
    setModalActive(false);
    handleClear();
  }

  function handleChangeStatus(e) {
    setOptionStatus(e.currentTarget.value);
  }

  function handleChangeWorker(e) {
    setOptionWorker(e.currentTarget.value);
  }

  function handleClear() {
    setFio('');
    setMobileNum('');
    setSity('');
    setStreet('');
    setHouse('');
    setSection('');
    setFlat('');
    setEntrance('');
    setFloor('');
    setOptionStatus('');
    setDate('');
    setNote('');
    setOptionWorker('');
    setConnection(false);
    setFaq(false);
    setCritical(false);
    setImportant(false);
    setRegular(false);
  }

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

  console.log(task);

  return (
    <div className="add-task">
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="add-task__title">
          <h1>Новая запись</h1>
        </div>
        <form onSubmit={handleSubmit}>
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
          <div className="add-task__inputs">
            <input
              placeholder="Ф.И.О"
              type="text"
              value={fio}
              onChange={(e) => setFio(e.target.value)}
            />
            <input
              placeholder="Телефон(мобильный)"
              type="text"
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
            />
            <input
              placeholder="Город"
              type="text"
              value={sity}
              onChange={(e) => setSity(e.target.value)}
            />
            <input
              placeholder="Улица"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="add-task__inputs-adress">
            <input
              placeholder="Дом"
              type="text"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
            />
            <input
              placeholder="Секция"
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
            <input
              placeholder="Квартира"
              type="text"
              value={flat}
              onChange={(e) => setFlat(e.target.value)}
            />
            <input
              placeholder="Подьезд"
              type="text"
              value={entrance}
              onChange={(e) => setEntrance(e.target.value)}
            />
            <input
              placeholder="Этаж"
              type="text"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
          </div>
          <div className="add-task__inputs-data">
            <select className="add-task__select" value={optionStatus} onChange={handleChangeStatus}>
              <option value="Не выбран">Статус</option>
              <option value="Не подключен">Не подключен</option>
              <option value="Нет технической возможности">Нет технической возможности</option>
              <option value="Не оплачено">Не оплачено</option>
              <option value="Отменено заказчиком">Отменено заказчиком</option>
              <option value="Сайт">Сайт</option>
            </select>
            <input
              placeholder="Дата"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Комментраий"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div>
            <select
              className="add-task__select"
              value={optionWorker}
              onChange={(e) => handleChangeWorker(e)}>
              <option value="Не выбран">Сотрудник</option>
              <option value="Алешка">Алешка</option>
              <option value="Василий">Василий</option>
              <option value="Джигурда">Джигурда</option>
            </select>
          </div>
          <div className="add-task__action-btn">
            {editMode ? (
              <button onClick={(e) => editTask(e)}>Редактировать</button>
            ) : (
              <button onClick={saveTask}>Сохранить</button>
            )}
            <button onClick={handleCancel}>Отмена</button>
            <button onClick={handleClear}>Сброс</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
