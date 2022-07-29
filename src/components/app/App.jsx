import {useEffect} from 'react';
import {useState} from 'react';
import {AddTask} from '../addTask/addTask';
import {Filters} from '../filters/filters';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {TaskList} from '../taskList/TaskList';
import './App.scss';

function App() {
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
  const [optionStatus, setOptionStatus] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [optionWorker, setOptionWorker] = useState('');

  const [editMode, setEditMode] = useState(null);

  let cityNames = [
    {id: 0, cityName: 'Выбрать город'},
    {id: 1, cityName: 'Горишни Плавни'},
    {id: 2, cityName: 'Келеберда'},
    {id: 3, cityName: 'Григоро-Бригадировка'},
    {id: 4, cityName: 'Дмитровка'},
    {id: 5, cityName: 'Дружба'},
    {id: 6, cityName: 'Золотнище'},
    {id: 7, cityName: 'Коноплянка'},
    {id: 8, cityName: 'Мотрино'},
    {id: 9, cityName: 'Озера'},
    {id: 10, cityName: 'Подубное'},
    {id: 11, cityName: 'Пришиб'},
    {id: 12, cityName: 'Решетиловка'},
    {id: 13, cityName: 'Саловка'},
    {id: 14, cityName: 'Солошино'},
    {id: 15, cityName: 'Хорол'},
    {id: 16, cityName: 'Юнность'},
  ];

  const [streetNames, setStreetNames] = useState([
    {cityId: 0, id: 0, streetName: 'Выбрать улицу'},
    {cityId: 1, id: 1, streetName: 'Патриса Лумумбы'},
    {cityId: 1, id: 2, streetName: 'Павлика Морорзова'},
    {cityId: 2, id: 3, streetName: 'Жданова'},
    {cityId: 2, id: 4, streetName: 'Кирова'},
    {cityId: 3, id: 5, streetName: 'Калининская'},
    {cityId: 3, id: 6, streetName: 'Вишневая'},
    {cityId: 4, id: 7, streetName: 'Полтавский Проспект'},
    {cityId: 4, id: 8, streetName: 'Героев Днепра'},
    {cityId: 5, id: 9, streetName: 'Космонавтов'},
    {cityId: 5, id: 10, streetName: 'Портовая'},
    {cityId: 6, id: 11, streetName: 'Мира'},
    {cityId: 6, id: 12, streetName: 'Горняков'},
    {cityId: 7, id: 13, streetName: 'Сезам'},
    {cityId: 7, id: 14, streetName: 'Щорса'},
    {cityId: 8, id: 15, streetName: 'Островкского'},
    {cityId: 8, id: 16, streetName: 'Академика Шлихтера'},
    {cityId: 9, id: 17, streetName: 'Юрия Коцюбинского'},
    {cityId: 9, id: 18, streetName: 'Днепропетровская'},
    {cityId: 10, id: 19, streetName: 'Киевская'},
    {cityId: 10, id: 20, streetName: 'Вифлиемская'},
    {cityId: 11, id: 21, streetName: 'Горького'},
    {cityId: 11, id: 22, streetName: 'Ломоносова'},
    {cityId: 12, id: 23, streetName: 'Ивана Клименко'},
    {cityId: 12, id: 24, streetName: 'Чудновского'},
    {cityId: 13, id: 25, streetName: 'Фадеева'},
    {cityId: 13, id: 26, streetName: 'Леси Украинки'},
    {cityId: 14, id: 27, streetName: 'Шевченко'},
    {cityId: 14, id: 28, streetName: 'Большая Набережная'},
    {cityId: 15, id: 29, streetName: 'Проспект Свободы'},
    {cityId: 15, id: 30, streetName: 'Кобзарская'},
    {cityId: 16, id: 31, streetName: 'Владимира Великого'},
    {cityId: 16, id: 32, streetName: 'Козацкой Славы'},
  ]);

  useEffect(() => {
    setFiltered(task);
  }, [task]);

  // console.log(task);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Filters task={task} setTask={setTask} filtered={filtered} setFiltered={setFiltered} />
        <AddTask
          streetNames={streetNames}
          setStreetNames={setStreetNames}
          cityNames={cityNames}
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
          optionStatus={optionStatus}
          setOptionStatus={setOptionStatus}
          date={date}
          setDate={setDate}
          note={note}
          setNote={setNote}
          optionWorker={optionWorker}
          setOptionWorker={setOptionWorker}
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
          setOptionStatus={setOptionStatus}
          setDate={setDate}
          setNote={setNote}
          setOptionWorker={setOptionWorker}
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
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
