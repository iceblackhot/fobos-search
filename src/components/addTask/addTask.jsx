import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {Russian} from 'flatpickr/dist/l10n/ru.js';
import Modal from '../modal/modal';
import './addTask.scss';
import {WorkerInput} from './workerAutoInput/workerInput';
import {PriorityBtns} from './priorityBtns/priorityBtns';
import {StreetAutoInput} from './streetAutoInput/streetAutoInput';
import {CityAutoInput} from './cityAutoInput/cityAutoInput';
import {StatusOption} from './cityAutoInput/statusOption/statusOption';

export const AddTask = ({
  cityNames,
  streetNames,
  workerNames,
  task,
  setTask,
  modalActive,
  setModalActive,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  patronymic,
  setPatronymic,
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
  building,
  setBuilding,
  section,
  setSection,
  apartment,
  setApartment,
  entrance,
  setEntrance,
  floor,
  setFloor,
  status,
  setStatus,
  planDate,
  setPlanDate,
  comment,
  setComment,
  worker,
  setWorker,
  workerId,
  setWorkerId,
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
  setFiltered,
  statusList,
  statusId,
  setStatusId,
}) => {
  // let year = new Date().getFullYear();
  // let month = new Date().getMonth();
  // let day = new Date().getDate();
  // let hours = new Date().getHours();

  // let current_date = new Date().getMinutes();
  // let minutes = ('0' + current_date).slice(-2);

  // let seconds = new Date().getSeconds();
  // let dateNow = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

  function saveTask() {
    if (!cityId || !statusId) {
      console.log(statusId);
      return;
    } else {
      setTask([
        ...task,
        {
          // dateNow: dateNow,
          // id: Math.random().toString(36).substring(2, 9),
          fname: firstName,
          lname: lastName,
          patronymic: patronymic,
          mobile: mobileNum,
          city: city,
          cityId: cityId,
          street: street,
          streetId: streetId,
          building: building,
          section: section,
          apartment: apartment,
          entrance: entrance,
          floor: floor,
          status: status,
          statusId: statusId,
          planDate: planDate,
          comment: comment,
          worker: worker,
          workerId: workerId,
          editNote: false,
          newConnection: connection,
          faq: faq,
          statCritical: critical,
          statImportant: important,
          statRegular: regular,
        },
      ]);
    }
    setFirstName('');
    setLastName('');
    setPatronymic('');
    setMobileNum('');
    setCityId('');
    setStreetId('');
    setBuilding('');
    setSection('');
    setApartment('');
    setEntrance('');
    setFloor('');
    setStatus('');
    setStatusId('');
    setPlanDate('');
    setComment('');
    setWorker('');
    setModalActive(false);
  }

  function editTask(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!cityId || !statusId) {
      return;
    } else {
      let newTask = [...task].filter((item) => {
        if (item.id === editMode) {
          // item.dateNow = dateNow;
          item.lname = lastName;
          item.fname = firstName;
          item.patronymic = patronymic;
          item.mobile = mobileNum;
          item.city = city;
          item.cityId = cityId;
          item.street = street;
          item.streetId = streetId;
          item.building = building;
          item.section = section;
          item.apartment = apartment;
          item.entrance = entrance;
          item.floor = floor;
          item.status = status;
          item.statusId = statusId;
          item.planDate = planDate;
          item.comment = comment;
          item.worker = worker;
          item.workerId = workerId;
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

  function handleClear() {
    setFirstName('');
    setLastName('');
    setPatronymic('');
    setMobileNum('');
    setCityId('');
    setStreetId('');
    setBuilding('');
    setSection('');
    setApartment('');
    setEntrance('');
    setFloor('');
    setStatus('');
    setStatusId('');
    setPlanDate('');
    setComment('');
    setWorker('');
    setConnection(false);
    setFaq(false);
    setCritical(false);
    setImportant(false);
    setRegular(false);
  }

  function changeMobileInput(e) {
    let str = e.target.value
      .replace(/\D+/g, '')
      .replace(/^(\d{3})(\d{3})(\d{2})(\d{2}).*/, '($1) $2-$3-$4');
    if (str != null) {
      setMobileNum(str);
    } else {
      setMobileNum('');
    }
  }

  function changeLastNameInput(e) {
    let str = e.target.value;
    if (str != null) {
      setLastName(str);
    } else {
      setLastName('');
    }
  }

  function changeFirstNameInput(e) {
    let str = e.target.value;
    if (str != null) {
      setFirstName(str);
    } else {
      setFirstName('');
    }
  }

  function changePatronymicInput(e) {
    let str = e.target.value;
    if (str != null) {
      setPatronymic(str);
    } else {
      setPatronymic('');
    }
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
          <div className="add-task__inputs-fio">
            <input
              placeholder="Прізвище"
              type="text"
              value={lastName}
              onChange={changeLastNameInput}
            />
            <input
              placeholder="Ім'я"
              type="text"
              value={firstName}
              onChange={changeFirstNameInput}
            />
            <input
              placeholder="По батькові"
              type="text"
              value={patronymic}
              onChange={changePatronymicInput}
            />
          </div>
          <div className="add-task__inputs-mobile">
            <input
              placeholder="Телефон(мобильный)"
              type="text"
              maxLength={50}
              value={mobileNum}
              onChange={changeMobileInput}
            />
          </div>
          <div className="add-task__inputs-adress">
            <CityAutoInput
              setFiltered={setFiltered}
              task={task}
              cityNames={cityNames}
              setCity={setCity}
              cityId={cityId}
              setCityId={setCityId}
            />
            <StreetAutoInput
              streetNames={streetNames}
              setStreet={setStreet}
              streetId={streetId}
              setStreetId={setStreetId}
              cityId={cityId}
            />
          </div>
          <div className="add-task__inputs-adressdetails">
            <input
              placeholder="Дом"
              type="text"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
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
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
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
            <StatusOption
              statusList={statusList}
              status={status}
              setStatus={setStatus}
              statusId={statusId}
              setStatusId={setStatusId}
            />
            <Flatpickr
              style={{width: '50%'}}
              placeholder="Дата"
              data-enable-time
              value={planDate}
              options={{
                defaultDate: 'today',
                minDate: '01.01.2020',
                maxDate: '01.01.2025',
                time_24hr: true,
                dateFormat: 'Y-m-d H:i:ss',
                locale: Russian,
              }}
              onChange={(selectedDates, dateStr, instance) => {
                planDate = dateStr;
                // console.log(selectedDates === null);
                // console.log(dateStr);
                // console.log(instance);
                setPlanDate(planDate);
              }}
            />
          </div>
          <div>
            <textarea
              placeholder="Комментраий"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <WorkerInput
            worker={worker}
            setWorker={setWorker}
            workerNames={workerNames}
            cityId={cityId}
            workerId={workerId}
            setWorkerId={setWorkerId}
          />
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
