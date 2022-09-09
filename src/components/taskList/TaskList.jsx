import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import FinishTaskModal from './finishTaskModal/finishTaskModal';
import './taskList.scss';
import './print.scss';

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
  setType,
  setPriority,
  setEditMode,
  filtered,
  setStatusId,
  btnActive,
  setError,
  setIsLoaded,
  setAddDate,
}) => {
  const [open, setOpen] = React.useState(false);

  const printContentRef = useRef();

  const classTask = `task-list${btnActive ? ' active' : ''}`;

  const classTaskList = `task-list__list${btnActive ? ' active' : ''}`;

  function showEditModal(noteId) {
    setEditMode(noteId);
    fetch(process.env.REACT_APP_URL_REQUESTS + editMode, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          let res = result.values[0];
          // console.log(editMode + ' show modal');
          // console.log(res);
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
          setPlanDate(res.planDate);
          setAddDate(res.addDate);
          setComment(res.comment);
          setWorker(res.workerName);
          setWorkerId(res.workerId);
          setType(res.type);
          setPriority(res.priority);
        },
        (error) => {
          // setIsLoaded(true);
          setError(error);
        },
      );
  }

  function showAddModal() {
    setModalActive(true);
    setEditMode(false);
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
    setWorkerId('');
    setType(0);
    setPriority(0);
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

  console.log(task);

  return (
    <div className={classTask}>
      <div className="task-list__title">
        <h1>Всего заявок</h1>
        <span>{task.length}</span>
      </div>
      <div className="task-list__add-btn">
        <button onClick={showAddModal}>Создать заявку</button>
        <ReactToPrint
          trigger={() => {
            return <button>Печать</button>;
          }}
          content={() => printContentRef.current}
        />
        <button>Виконані заявки</button>
      </div>
      <ul className="task-list__table-head">
        <li className="task-list__table-title">Дата подачи</li>
        <li className="task-list__table-title">Город</li>
        <li className="task-list__table-title">Адрес</li>
        <li className="task-list__table-title">Статус</li>
        <li className="task-list__table-title">ФИО</li>
        <li className="task-list__table-title">Телефон</li>
        <li className="task-list__table-title">Комментарий</li>
        <li className="task-list__table-title">Сотрудник</li>
        <li className="task-list__table-title">Вып</li>
      </ul>
      <ul className={classTaskList} ref={printContentRef}>
        {filtered.map((item) => (
          <li
            key={item.id}
            className={editMode === item.id ? 'task-list__item edit' : 'task-list__item'}
            onClick={(e) => {
              // e.stopPropagation();
              setEditMode(item.id);
              // task.filter((currTask) => {
              if (item.id === editMode) {
                showEditModal(item.id);
                // console.log(editMode === item.id);
                // console.log(editMode);
                // console.log(item.id);
                return item;
              }
              // });
            }}>
            <>
              <div id="noPrint" className="task-list__item-cell">
                {formatAddDate(item.addDate)}
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
                />
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};
