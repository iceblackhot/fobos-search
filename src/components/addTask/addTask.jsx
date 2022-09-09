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
  addDate,
  setAddDate,
  comment,
  setComment,
  worker,
  setWorker,
  workerId,
  setWorkerId,
  type,
  setType,
  priority,
  setPriority,
  editMode,
  setEditMode,
  setFiltered,
  statusList,
  statusId,
  setStatusId,
  isLoaded,
  setIsLoaded,
}) => {
  function saveTask() {
    if (!cityId || !lastName || !mobileNum) {
      // console.log(cityId);
      return;
    } else {
      fetch(process.env.REACT_APP_URL_ADD_REQUEST, {
        method: 'post',
        mode: 'cors',
        withCredentials: true,
        body: JSON.stringify({
          fname: firstName,
          lname: lastName,
          patronymic: patronymic,
          cityId: cityId,
          streetId: streetId,
          building: building,
          section: section,
          apartment: apartment,
          entrance: entrance,
          floor: floor,
          comment: comment,
          mobile: mobileNum,
          planDate: planDate,
          statusId: statusId,
          workerId: workerId,
          type: type,
          priority: priority,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            // console.log(result);
            if (result.status === 200 && result.id) {
              fetch(process.env.REACT_APP_URL_REQUESTS + result.id, {
                method: 'get',
                mode: 'cors',
                withCredentials: true,
              })
                .then((res) => res.json())
                .then(
                  (result) => {
                    let newTask = result.values;
                    // setIsLoaded(true);
                    console.log(newTask);
                    setTask([...newTask, ...task]);
                  },
                  (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                    console.log(error);
                  },
                );
            }
          },
          (error) => {
            console.log(error);
          },
        );
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
    setType(0);
    setPriority(0);
    setModalActive(false);
  }

  function editTask(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!cityId || !lastName || !mobileNum) {
      return;
    } else {
      fetch(process.env.REACT_APP_URL_EDIT_SAVE_REQUEST + editMode, {
        method: 'post',
        mode: 'cors',
        withCredentials: true,
        body: JSON.stringify({
          fname: firstName,
          lname: lastName,
          patronymic: patronymic,
          cityId: cityId,
          streetId: streetId,
          building: building,
          section: section,
          apartment: apartment,
          entrance: entrance,
          floor: floor,
          comment: comment,
          mobile: mobileNum,
          planDate: planDate,
          statusId: statusId,
          workerId: workerId,
          type: type,
          priority: priority,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            if (result.status === 200) {
              fetch(process.env.REACT_APP_URL_REQUESTS + editMode, {
                method: 'get',
                mode: 'cors',
                withCredentials: true,
              })
                .then((res) => res.json())
                .then(
                  (result) => {
                    let res = result.values;
                    console.log(res);
                    setFirstName(res.fname);
                    setLastName(res.lname);
                    setPatronymic(res.patronymic);
                    setWorkerId(res.workerId);
                    setWorker(res.workerName);
                    setMobileNum(res.mobile);
                    setCity(res.cityName);
                    setCityId(res.cityId);
                    setStreetId(res.streetId);
                    setStreet(res.street);
                    setBuilding(res.building);
                    setSection(res.section);
                    setApartment(res.apartment);
                    setEntrance(res.entrance);
                    setFloor(res.floor);
                    setStatus(res.statusName);
                    setStatusId(res.statusId);
                    setAddDate(res.addDate);
                    setPlanDate(res.planDate);
                    setComment(res.comment);
                    setType(res.type);
                    setPriority(res.priority);
                    task.filter((item) => {
                      if (item.id === editMode) {
                        // console.log(item.id === editMode);
                        item.workerId = workerId;
                        item.workerName = worker;
                        item.fname = firstName;
                        item.lname = lastName;
                        item.patronymic = patronymic;
                        item.mobile = mobileNum;
                        item.cityName = city;
                        item.cityId = cityId;
                        item.streetId = streetId;
                        item.streetName = street;
                        item.building = building;
                        item.section = section;
                        item.apartment = apartment;
                        item.entrance = entrance;
                        item.floor = floor;
                        item.statusName = status;
                        item.statusId = statusId;
                        item.planDate = planDate;
                        item.addDate = addDate;
                        item.comment = comment;
                        item.priority = priority;
                        item.type = type;
                      }
                    });
                    // setIsLoaded(true);
                  },
                  (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                    console.log(error);
                  },
                );
            }
          },
          (error) => {
            console.log(error);
          },
        );
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
    setType(0);
    setPriority(0);
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
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        handleCancel={handleCancel}
        setEditMode={setEditMode}>
        <div className="add-task__title">
          <h1>Новая запись</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <PriorityBtns
            editMode={editMode}
            task={task}
            setTask={setTask}
            type={type}
            setType={setType}
            priority={priority}
            setPriority={setPriority}
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
              city={city}
              setCity={setCity}
              cityId={cityId}
              setCityId={setCityId}
              setStreet={setStreet}
              setStreetId={setStreetId}
              editMode={editMode}
            />
            <StreetAutoInput
              streetNames={streetNames}
              street={street}
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
                console.log(planDate);
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
            editMode={editMode}
            worker={worker}
            workerId={workerId}
            setWorker={setWorker}
            workerNames={workerNames}
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
