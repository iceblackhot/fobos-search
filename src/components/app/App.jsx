import {useEffect} from 'react';
import {useState} from 'react';
import {AddTask} from '../addTask/addTask';
import {Filters} from '../filters/filters';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {TaskList} from '../taskList/TaskList';
import './App.scss';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const [task, setTask] = useState([]);
  const [doneMode, setDoneMode] = useState(false);
  const [doneTasks, setDoneTasks] = useState(0);
  const [taskId, setTaskId] = useState(false);
  const [filtered, setFiltered] = useState(task);
  const [modalActive, setModalActive] = useState(false);

  const [type, setType] = useState(0);
  const [priority, setPriority] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');

  const [mobileNum, setMobileNum] = useState('');
  const [city, setCity] = useState('');
  const [cityId, setCityId] = useState('');
  const [street, setStreet] = useState('');
  const [streetId, setStreetId] = useState('');
  const [building, setBuilding] = useState('');
  const [section, setSection] = useState('');
  const [apartment, setApartment] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [status, setStatus] = useState('');
  const [statusId, setStatusId] = useState('');
  const [planDate, setPlanDate] = useState('');
  const [addDate, setAddDate] = useState('');
  const [comment, setComment] = useState('');
  const [worker, setWorker] = useState('');
  const [workerId, setWorkerId] = useState('');

  const [editMode, setEditMode] = useState(null);

  const [filterCitySelectValue, setFilterCitySelectValue] = useState([]);
  const [filterStatusSelectValue, setFilterStatusSelectValue] = useState([]);

  const [btnActive, setBtnActive] = useState(false);

  const [cityNames, setCityNames] = useState([]);
  const [streetNames, setStreetNames] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [workerNames, setWorkerNames] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  // console.log(doneTasks);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL_REQUESTS + doneTasks + page, {
      method: 'post',
      mode: 'cors',
      withCredentials: true,
      body: JSON.stringify({
        done: doneTasks,
        page,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          setIsLoaded(true);
          setTask(result.values);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
    fetch(process.env.REACT_APP_URL_CITIES, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.values);
          setIsLoaded(true);
          const citiesObj = result.values;
          setCityNames(citiesObj);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
    fetch(process.env.REACT_APP_URL_STREETS, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.values);
          setIsLoaded(true);
          const streetsObj = result.values;
          setStreetNames(streetsObj);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );

    fetch(process.env.REACT_APP_URL_STATUSES, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.values);
          setIsLoaded(true);
          const statusesObj = result.values;
          setStatusList(statusesObj);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );

    fetch(process.env.REACT_APP_URL_WORKERS, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.values);
          setIsLoaded(true);
          const workersObj = result.values;
          setWorkerNames(workersObj);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, [page, doneTasks]);

  useEffect(() => {
    setFiltered(task);
  }, [task]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Filters
          statusList={statusList}
          cityNames={cityNames}
          streetNames={streetNames}
          workerNames={workerNames}
          setStreetId={setStreetId}
          setStreet={setStreet}
          task={task}
          setFiltered={setFiltered}
          filterCitySelectValue={filterCitySelectValue}
          setFilterCitySelectValue={setFilterCitySelectValue}
          filterStatusSelectValue={filterStatusSelectValue}
          setFilterStatusSelectValue={setFilterStatusSelectValue}
          btnActive={btnActive}
          setBtnActive={setBtnActive}
        />
        <AddTask
          streetNames={streetNames}
          cityNames={cityNames}
          workerNames={workerNames}
          task={task}
          setTask={setTask}
          taskId={taskId}
          setTaskId={setTaskId}
          modalActive={modalActive}
          setModalActive={setModalActive}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          patronymic={patronymic}
          setPatronymic={setPatronymic}
          mobileNum={mobileNum}
          setMobileNum={setMobileNum}
          city={city}
          setCity={setCity}
          cityId={cityId}
          setCityId={setCityId}
          street={street}
          setStreet={setStreet}
          streetId={streetId}
          setStreetId={setStreetId}
          building={building}
          setBuilding={setBuilding}
          section={section}
          setSection={setSection}
          apartment={apartment}
          setApartment={setApartment}
          entrance={entrance}
          setEntrance={setEntrance}
          floor={floor}
          setFloor={setFloor}
          status={status}
          setStatus={setStatus}
          planDate={planDate}
          setPlanDate={setPlanDate}
          addDate={addDate}
          setAddDate={setAddDate}
          comment={comment}
          setComment={setComment}
          worker={worker}
          setWorker={setWorker}
          workerId={workerId}
          setWorkerId={setWorkerId}
          type={type}
          setType={setType}
          priority={priority}
          setPriority={setPriority}
          editMode={editMode}
          setEditMode={setEditMode}
          filtered={filtered}
          setFiltered={setFiltered}
          statusList={statusList}
          statusId={statusId}
          setStatusId={setStatusId}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          doneMode={doneMode}
        />
        <TaskList
          task={task}
          setTask={setTask}
          modalActive={modalActive}
          setModalActive={setModalActive}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setPatronymic={setPatronymic}
          setMobileNum={setMobileNum}
          setCity={setCity}
          setCityId={setCityId}
          setStreet={setStreet}
          setStreetId={setStreetId}
          setBuilding={setBuilding}
          setSection={setSection}
          setApartment={setApartment}
          setEntrance={setEntrance}
          setFloor={setFloor}
          setStatus={setStatus}
          setPlanDate={setPlanDate}
          setComment={setComment}
          setWorker={setWorker}
          workerId={workerId}
          setWorkerId={setWorkerId}
          type={type}
          setType={setType}
          priority={priority}
          setPriority={setPriority}
          editMode={editMode}
          setEditMode={setEditMode}
          filtered={filtered}
          statusId={statusId}
          setStatusId={setStatusId}
          btnActive={btnActive}
          setBtnActive={setBtnActive}
          setError={setError}
          setIsLoaded={setIsLoaded}
          setAddDate={setAddDate}
          doneMode={doneMode}
          setDoneMode={setDoneMode}
          doneTasks={doneTasks}
          setDoneTasks={setDoneTasks}
          page={page}
          setPage={setPage}
          totalPage={totalPage}
          setTotalPage={setTotalPage}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
