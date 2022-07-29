import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {Russian} from 'flatpickr/dist/l10n/ru.js';
import Modal from '../modal/modal';
import './addTask.scss';
import {WorkerInput} from './workerAutoInput/workerInput';
import {PriorityBtns} from './priorityBtns/priorityBtns';
import {StreetAutoInput} from './streetAutoInput/streetAutoInput';
import {CityAutoInput} from './sityAutoInput/cityAutoInput';

export const AddTask = ({
  cityNames,
  streetNames,
  setStreetNames,
  task,
  setTask,
  modalActive,
  setModalActive,
  fio,
  setFio,
  mobileNum,
  setMobileNum,
  city,
  setCity,
  cityId,
  setCityId,
  street,
  setStreet,
  streetId,
  setStreetId,
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
  setEditMode,
  filtered,
  setFiltered,
}) => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let day = new Date().getDate();
  let hours = new Date().getHours();

  let current_date = new Date().getMinutes();
  let minutes = ('0' + current_date).slice(-2);

  let seconds = new Date().getSeconds();
  let dateNow = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

  function saveTask() {
    if (!fio || cityId === '0') {
      return;
    } else {
      setTask([
        ...task,
        {
          dateNow: dateNow,
          id: Math.random().toString(36).substring(2, 9),
          fio: fio,
          mobile: mobileNum,
          city: city,
          cityId: cityId,
          street: street,
          streetId: streetId,
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
    setCityId('');
    setStreetId('');
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
    if (!fio || cityId === '0') {
      console.log(typeof cityId);
      return;
    } else {
      let newTask = [...task].filter((item) => {
        if (item.id === editMode) {
          item.dateNow = dateNow;
          item.fio = fio;
          item.mobile = mobileNum;
          item.city = city;
          item.cityId = cityId;
          item.street = street;
          item.streetId = streetId;
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
      setEditMode(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveTask();
  }

  function handleCancel() {
    setModalActive(false);
    setEditMode(false);
    handleClear();
  }

  function handleChangeStatus(e) {
    setOptionStatus(e.currentTarget.value);
  }

  function handleClear() {
    setFio('');
    setMobileNum('');
    setCityId('');
    setStreetId('');
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

  // console.log(task);

  return (
    <div className="add-task">
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="add-task__title">
          <h1>Новая запись</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <PriorityBtns
            editMode={editMode}
            task={task}
            setTask={setTask}
            faq={faq}
            setFaq={setFaq}
            setConnection={setConnection}
            connection={connection}
            setCritical={setCritical}
            critical={critical}
            setImportant={setImportant}
            important={important}
            setRegular={setRegular}
            regular={regular}
          />
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
            <CityAutoInput
              cityNames={cityNames}
              streetNames={streetNames}
              setStreetNames={setStreetNames}
              city={city}
              setCity={setCity}
              street={street}
              setStreet={setStreet}
              cityId={cityId}
              setCityId={setCityId}
              streetId={streetId}
              setStreetId={setStreetId}
              filtered={filtered}
              setFiltered={setFiltered}
            />
            <StreetAutoInput
              streetNames={streetNames}
              setStreetNames={setStreetNames}
              setStreet={setStreet}
              streetId={streetId}
              setStreetId={setStreetId}
              cityId={cityId}
              setCityId={setCityId}
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

            <Flatpickr
              placeholder="Дата"
              data-enable-time
              value={date}
              options={{
                defaultDate: 'today',
                minDate: '01.01.2020',
                maxDate: '01.01.2025',
                dateFormat: 'Y-m-d h:i:ss',
                locale: Russian,
              }}
              onChange={(selectedDates, dateStr, instance) => {
                date = dateStr;
                // console.log(selectedDates === null);
                // console.log(dateStr);
                // console.log(instance);
                setDate(date);
              }}
            />
          </div>
          <div>
            <textarea
              placeholder="Комментраий"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <WorkerInput optionWorker={optionWorker} setOptionWorker={setOptionWorker} />
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
