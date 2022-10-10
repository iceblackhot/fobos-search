import React, {useEffect, useRef, useState} from 'react';
import ReactToPrint from 'react-to-print';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import FinishTaskModal from './finishTaskModal/finishTaskModal';
import './taskList.scss';
import './print.scss';
import {DoneTasks} from './doneTasks/doneTasks';
import {Tasks} from './tasks/tasks';
import {PaginationNav} from './pagination/pagination';
import {SortByOrder} from './sort/sortByOrder';
import {Search} from './search/search';
import LanIcon from '@mui/icons-material/Lan';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import EngineeringIcon from '@mui/icons-material/Engineering';
import {Preloader} from '../preloader/preloader';
import {RangeCalendar} from './rangeCalendar/rangeCalendar';
import {Faq} from './faq/faq';
import {DoneFaq} from './faq/doneFaq';
import {ConnectionType} from './connectionType/connectionType';

export const TaskList = ({
  task,
  setTask,
  modalActive,
  setModalActive,
  setFirstName,
  setLastName,
  setPatronymic,
  setMobileNum,
  setCity,
  setCityId,
  setStreet,
  setStreetId,
  setBuilding,
  setSection,
  setApartment,
  setEntrance,
  setFloor,
  setStatus,
  setPlanDate,
  setComment,
  setWorker,
  setWorkerId,
  editMode,
  type,
  setType,
  setPriority,
  setEditMode,
  filtered,
  setStatusId,
  btnActive,
  setError,
  isLoaded,
  setIsLoaded,
  setAddDate,
  doneMode,
  setDoneMode,
  doneTasks,
  setDoneTasks,
  page,
  setPage,
  totalPage,
  setTotalPage,
  fetchTasks,
  setConnTypeId,
  setFaqMode,
}) => {
  const [open, setOpen] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const printContentRef = useRef();

  const classTask = `task-list${btnActive ? ' active' : ''}`;

  const classTaskList = `task-list__list${btnActive ? ' active' : ''}`;

  let disabled = doneMode && 'disabled';

  function showDoneTaskModal() {
    // console.log(doneMode);
    task.filter((obj) => {
      if (obj.id === editMode) {
        setModalActive(true);
        setFirstName(obj.fname);
        setLastName(obj.lname);
        setPatronymic(obj.patronymic);
        setMobileNum(obj.mobile);
        setCity(obj.cityName);
        setCityId(obj.cityId);
        setStreet(obj.streetName);
        setStreetId(obj.streetId);
        setBuilding(obj.building);
        setSection(obj.section);
        setApartment(obj.apartment);
        setEntrance(obj.entrance);
        setFloor(obj.floor);
        setStatus(obj.statusName);
        setStatusId(obj.statusId);
        setConnTypeId(obj.connTypeId);
        setPlanDate(obj.planDate);
        setAddDate(obj.addDate);
        setComment(obj.comment);
        setWorker(obj.workerName);
        setWorkerId(obj.workerId);
        setType(obj.type);
        setPriority(obj.priority);
      }
    });
  }

  // console.log(type);

  function showEditModal() {
    setModalActive(true);
    // setIsLoaded(false);
    console.log(editMode);
    fetch(process.env.REACT_APP_URL_REQUESTS + editMode, {
      method: 'post',
      mode: 'cors',
      withCredentials: true,
      body: JSON.stringify({
        type: type,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          let res = result.values[0];
          // console.log(res.cityName);
          setIsLoaded(true);
          setModalActive(true);
          setFirstName(res.fname);
          setLastName(res.lname);
          setPatronymic(res.patronymic);
          setMobileNum(res.mobile);
          setCity(res.cityName);
          setCityId(res.cityId);
          setStreet(res.streetName);
          setStreetId(res.streetId);
          setBuilding(res.building);
          setSection(res.section);
          setApartment(res.apartment);
          setEntrance(res.entrance);
          setFloor(res.floor);
          setStatus(res.statusName);
          setStatusId(res.statusId);
          setConnTypeId(res.connTypeId);
          setPlanDate(res.planDate);
          setAddDate(res.addDate);
          setComment(res.comment);
          setWorker(res.workerName);
          setWorkerId(res.workerId);
          setType(res.type);
          setPriority(res.priority);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }

  function showAddModal() {
    setModalActive(true);
    setEditMode(false);
    // setFirstName('');
    // setLastName('');
    // setPatronymic('');
    // setMobileNum('');
    // setCityId('');
    // setStreetId('');
    // setBuilding('');
    // setSection('');
    // setApartment('');
    // setEntrance('');
    // setFloor('');
    // setStatus('');
    // setStatusId(1);
    // setConnTypeId(1);
    // setPlanDate('');
    // setComment('');
    // setWorker('');
    // setWorkerId('');
    // setType(0);
    // setPriority(0);
  }

  function formatAddDate(date) {
    // console.log(date);
    let d = new Date(date);
    let currDate = d.toLocaleString('ua-UA');
    return currDate;
  }

  function formatPlanDate(date) {
    // console.log(date);
    let d = new Date(date);
    let currDate = d.toLocaleString('ua-UA');
    return currDate;
  }

  if (!isLoaded) return <Preloader />;

  console.log(task);

  return (
    <div className={classTask}>
      <div className="task-list__title">
        <h1>Всього заявок</h1>
        <span>{task.length}</span>
      </div>
      <div className="task-list__add-btn">
        <ConnectionType
          setDoneTasks={setDoneTasks}
          setDoneMode={setDoneMode}
          setTask={setTask}
          setIsLoaded={setIsLoaded}
        />
        <DoneFaq
          setType={setType}
          setTotalPage={setTotalPage}
          setDoneTasks={setDoneTasks}
          setDoneMode={setDoneMode}
          setTask={setTask}
          setIsLoaded={setIsLoaded}
          setFaqMode={setFaqMode}
        />
        <Faq
          setType={setType}
          setTotalPage={setTotalPage}
          setDoneTasks={setDoneTasks}
          setDoneMode={setDoneMode}
          setTask={setTask}
          setIsLoaded={setIsLoaded}
          setFaqMode={setFaqMode}
        />
        <RangeCalendar
          fetchTasks={fetchTasks}
          setTask={setTask}
          setIsLoaded={setIsLoaded}
          doneTasks={doneTasks}
        />
        <Search
          setTask={setTask}
          inputValue={inputValue}
          setInputValue={setInputValue}
          fetchTasks={fetchTasks}
        />
        <button disabled={disabled} onClick={showAddModal}>
          Створити заявку
        </button>
        <Tasks
          setType={setType}
          setTotalPage={setTotalPage}
          setIsLoaded={setIsLoaded}
          isLoaded={isLoaded}
          setDoneMode={setDoneMode}
          setDoneTasks={setDoneTasks}
          fetchTasks={fetchTasks}
          setFaqMode={setFaqMode}
        />
        <DoneTasks
          setType={setType}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          setTask={setTask}
          setDoneMode={setDoneMode}
          doneTasks={doneTasks}
          setDoneTasks={setDoneTasks}
          setTotalPage={setTotalPage}
          page={page}
          fetchTasks={fetchTasks}
          setFaqMode={setFaqMode}
        />
        <ReactToPrint
          trigger={() => {
            return <button>Печать</button>;
          }}
          content={() => printContentRef.current}
        />
      </div>
      <SortByOrder setTask={setTask} doneMode={doneMode} />
      <ul className={classTaskList} ref={printContentRef}>
        {!task.length ? (
          <div className="task-list__item_title">
            <h2>Заявок немае</h2>
          </div>
        ) : (
          ''
        )}
        {filtered.map((item) => (
          <li
            key={item.id}
            className={editMode === item.id ? 'task-list__item edit' : 'task-list__item'}
            onClick={() => {
              setEditMode(Number(item.id));
              if (item.id === editMode && !doneMode) {
                showEditModal(item.id);
                return item;
              }
              if (doneMode) {
                showDoneTaskModal(item.id);
              }
            }}>
            <>
              <div id="noPrint" className="task-list__item-cell">
                <div
                  style={{
                    width: '100%',
                    textAlign: 'start',
                    color: 'blue',
                    fontSize: '13px',
                    color: '#84c4ff',
                  }}>
                  {item.connTypeId === 1 && (
                    <>
                      <LanIcon
                        style={{
                          fontSize: '0.9rem',
                        }}
                      />
                      <span>lan</span>
                    </>
                  )}
                  {item.connTypeId === 2 && (
                    <>
                      <SettingsInputComponentIcon
                        style={{
                          fontSize: '0.9rem',
                        }}
                      />
                      <span>pon</span>
                    </>
                  )}
                  {item.type === 2 && (
                    <>
                      <EngineeringIcon
                        style={{
                          fontSize: '0.9rem',
                        }}
                      />
                      <span>faq</span>
                    </>
                  )}
                </div>
                <div> {formatAddDate(item.addDate)}</div>
              </div>
              <div className="task-list__item-cell">
                {item.priority === 1 && (
                  <WarningAmberRoundedIcon id="noPrint" style={{color: 'red'}} />
                )}
                {item.priority === 2 && (
                  <ReportGmailerrorredRoundedIcon id="noPrint" style={{color: '#f4a261'}} />
                )}
                {item.priority === 3 && (
                  <LibraryBooksRoundedIcon id="noPrint" style={{color: '#2dcf40'}} />
                )}
                {item.cityName}
              </div>
              <div className="task-list__item-cell">
                <span>
                  {'ул.' +
                    item.streetName +
                    ' д.' +
                    item.building +
                    ' секц.' +
                    item.section +
                    ' кв.' +
                    item.apartment +
                    ' под.' +
                    item.entrance +
                    ' эт.' +
                    item.floor}
                </span>
              </div>
              <div className="task-list__item-cell">
                <span id="noPrint">{item.statusName}</span>
                <span>{formatPlanDate(item.planDate)}</span>
              </div>

              <div className="task-list__item-cell">
                <span>{item.lname}</span>
                <span>{item.fname}</span>
                <span>{item.patronymic}</span>
              </div>
              <div className="task-list__item-cell">
                <span>{item.mobile}</span>
              </div>
              <div className="task-list__item-cell">
                <span>{item.comment}</span>
              </div>
              <div id="noPrint" className="task-list__item-cell">
                <span>{item.workerName}</span>
              </div>
              <div className="task-list__item-cell">
                <FinishTaskModal
                  id={item.id}
                  task={task}
                  setTask={setTask}
                  open={open}
                  setOpen={setOpen}
                  setModalActive={setModalActive}
                  editMode={editMode}
                  setEditMode={setEditMode}
                  doneMode={doneMode}
                />
              </div>
            </>
          </li>
        ))}
      </ul>
      <PaginationNav
        setTask={setTask}
        page={page}
        setPage={setPage}
        totalPage={totalPage}
        setTotalPage={setTotalPage}
      />
    </div>
  );
};
