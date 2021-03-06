import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {Russian} from 'flatpickr/dist/l10n/ru.js';
import Modal from '../modal/modal';
import './addTask.scss';
import {WorkerInput} from './workerAutoInput/workerInput';
import {PriorityBtns} from './priorityBtns/priorityBtns';
import {SityAutoInput} from './sityAutoInput/sityAutoInput';
import {StreetAutoInput} from './streetAutoInput/streetAutoInput';

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
  setEditMode,
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
    setEditMode(false);
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

  // console.log(task);

  return (
    <div className="add-task">
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="add-task__title">
          <h1>?????????? ????????????</h1>
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
              placeholder="??.??.??"
              type="text"
              value={fio}
              onChange={(e) => setFio(e.target.value)}
            />
            <input
              placeholder="??????????????(??????????????????)"
              type="text"
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
            />
            <SityAutoInput sity={sity} setSity={setSity} />
            <StreetAutoInput street={street} setStreet={setStreet} sity={sity} setSity={setSity} />
          </div>
          <div className="add-task__inputs-adress">
            <input
              placeholder="??????"
              type="text"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
            />
            <input
              placeholder="????????????"
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
            <input
              placeholder="????????????????"
              type="text"
              value={flat}
              onChange={(e) => setFlat(e.target.value)}
            />
            <input
              placeholder="??????????????"
              type="text"
              value={entrance}
              onChange={(e) => setEntrance(e.target.value)}
            />
            <input
              placeholder="????????"
              type="text"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
          </div>
          <div className="add-task__inputs-data">
            <select className="add-task__select" value={optionStatus} onChange={handleChangeStatus}>
              <option value="???? ????????????">????????????</option>
              <option value="???? ??????????????????">???? ??????????????????</option>
              <option value="?????? ?????????????????????? ??????????????????????">?????? ?????????????????????? ??????????????????????</option>
              <option value="???? ????????????????">???? ????????????????</option>
              <option value="???????????????? ????????????????????">???????????????? ????????????????????</option>
              <option value="????????">????????</option>
            </select>

            <Flatpickr
              placeholder="????????"
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
              placeholder="??????????????????????"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <WorkerInput optionWorker={optionWorker} setOptionWorker={setOptionWorker} />
          <div className="add-task__action-btn">
            {editMode ? (
              <button onClick={(e) => editTask(e)}>??????????????????????????</button>
            ) : (
              <button onClick={saveTask}>??????????????????</button>
            )}
            <button onClick={handleCancel}>????????????</button>
            <button onClick={handleClear}>??????????</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
