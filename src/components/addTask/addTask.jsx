import React, {useState} from 'react';
import Modal from '../modal/modal';
import './addTask.scss';

export const AddTask = ({task, setTask}) => {
  const [modalActive, setModalActive] = useState(false);
  const [fio, setFio] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [sity, setSity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [section, setSection] = useState('');
  const [flat, setFlat] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [optionStatus, setOptionStatus] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [optionWorker, setOptionWorker] = useState('');

  function saveTask() {
    if (!fio) {
      return;
    } else {
      setTask([
        ...task,
        {
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
          status: true,
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

  function handleSubmit(e) {
    e.preventDefault();
    saveTask();
  }

  function handleClick() {
    setModalActive(true);
  }

  function handleCancel() {
    setModalActive(false);
  }

  function handleChangeStatus(e) {
    setOptionStatus(e.currentTarget.value);
  }

  function handleChangeWorker(e) {
    setOptionWorker(e.currentTarget.value);
  }

  console.log(task);

  return (
    <div className="add-task">
      <button onClick={handleClick}>Создать заявку</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="add-task__title">
          <h1>Новая запись</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="add-task__options">
            <div className="add-task__options-type">
              <button className="add-task__options-btn">Подключение</button>
              <button className="add-task__options-btn">Фак</button>
            </div>
            <div className="add-task__options-priority">
              <button className="add-task__options-btn">Критично</button>
              <button className="add-task__options-btn">Важно</button>
              <button className="add-task__options-btn">Обычная</button>
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
            <select className="add-task__select" value={optionWorker} onChange={handleChangeWorker}>
              <option value="Не выбран">Сотрудник</option>
              <option value="Алешка">Алешка</option>
              <option value="Василий">Василий</option>
              <option value="Джигурда">Джигурда</option>
            </select>
          </div>
          <div className="add-task__action-btn">
            <button onClick={saveTask}>Сохранить</button>
            <button onClick={handleCancel}>Отмена</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
