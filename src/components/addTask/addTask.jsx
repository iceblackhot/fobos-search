import React, {useState} from 'react';
import Modal from '../modal/modal';
import './addTask.scss';

export const AddTask = ({task, setTask}) => {
  const [modalActive, setModalActive] = useState(false);

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
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input placeholder="Телефон(мобильный)" type="text" />
            <input placeholder="Город" type="text" />
            <input placeholder="Улица" type="text" />
          </div>
          <div className="add-task__inputs-adress">
            <input placeholder="Дом" type="text" />
            <input placeholder="Секция" type="text" />
            <input placeholder="Квартира" type="text" />
            <input placeholder="Подьезд" type="text" />
            <input placeholder="Этаж" type="text" />
          </div>
          <div className="add-task__inputs-data">
            <select className="add-task__select">
              <option value="">Статус</option>
              <option value="mobile">Не подключен</option>
              <option value="tablet">Нет технической возможности</option>
              <option value="computer">Не оплачено</option>
              <option value="tv">Отменено заказчиком</option>
              <option value="tv">Сайт</option>
            </select>
            <input placeholder="Дата" type="text" />
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
