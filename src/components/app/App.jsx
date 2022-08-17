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
  const [filtered, setFiltered] = useState(task);
  const [modalActive, setModalActive] = useState(false);

  const [connection, setConnection] = useState(false);
  const [faq, setFaq] = useState(false);

  const [critical, setCritical] = useState(false);
  const [important, setImportant] = useState(false);
  const [regular, setRegular] = useState(false);

  const [fio, setFio] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [city, setCity] = useState('');
  const [cityId, setCityId] = useState('');
  const [street, setStreet] = useState('');
  const [streetId, setStreetId] = useState('');
  const [house, setHouse] = useState('');
  const [section, setSection] = useState('');
  const [flat, setFlat] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [status, setStatus] = useState('');
  const [statusId, setStatusId] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
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

  useEffect(() => {
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
          const firstCityObject = {id: 0, cityName: 'Обрати місто'};
          citiesObj.unshift(firstCityObject);
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
          const firstStreetObject = {cityId: 0, id: 0, streetName: 'Обрати вулицю'};
          streetsObj.unshift(firstStreetObject);
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
          const firstStatusObject = {id: 0, statusName: 'Не обрано'};
          statusesObj.unshift(firstStatusObject);
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
          const firstWorkerObject = {id: 0, workerName: 'Обрати робітника'};
          workersObj.unshift(firstWorkerObject);
          setWorkerNames(workersObj);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  useEffect(() => {
    setFiltered(task);
  }, [task]);

  // console.log(task);

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
          modalActive={modalActive}
          setModalActive={setModalActive}
          fio={fio}
          setFio={setFio}
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
          house={house}
          setHouse={setHouse}
          section={section}
          setSection={setSection}
          flat={flat}
          setFlat={setFlat}
          entrance={entrance}
          setEntrance={setEntrance}
          floor={floor}
          setFloor={setFloor}
          status={status}
          setStatus={setStatus}
          date={date}
          setDate={setDate}
          note={note}
          setNote={setNote}
          worker={worker}
          setWorker={setWorker}
          workerId={workerId}
          setWorkerId={setWorkerId}
          connection={connection}
          setConnection={setConnection}
          faq={faq}
          setFaq={setFaq}
          critical={critical}
          setCritical={setCritical}
          important={important}
          setImportant={setImportant}
          regular={regular}
          setRegular={setRegular}
          editMode={editMode}
          setEditMode={setEditMode}
          filtered={filtered}
          setFiltered={setFiltered}
          statusList={statusList}
          statusId={statusId}
          setStatusId={setStatusId}
        />
        <TaskList
          task={task}
          setTask={setTask}
          setModalActive={setModalActive}
          setFio={setFio}
          setMobileNum={setMobileNum}
          setCity={setCity}
          setCityId={setCityId}
          setStreet={setStreet}
          setStreetId={setStreetId}
          setHouse={setHouse}
          setSection={setSection}
          setFlat={setFlat}
          setEntrance={setEntrance}
          setFloor={setFloor}
          setStatus={setStatus}
          setDate={setDate}
          setNote={setNote}
          setWorker={setWorker}
          workerId={workerId}
          setWorkerId={setWorkerId}
          connection={connection}
          setConnection={setConnection}
          faq={faq}
          setFaq={setFaq}
          critical={critical}
          setCritical={setCritical}
          important={important}
          setImportant={setImportant}
          regular={regular}
          setRegular={setRegular}
          editMode={editMode}
          setEditMode={setEditMode}
          filtered={filtered}
          statusId={statusId}
          setStatusId={setStatusId}
          btnActive={btnActive}
          setBtnActive={setBtnActive}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
