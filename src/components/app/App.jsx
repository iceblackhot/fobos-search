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
  const [sity, setSity] = useState('');
  const [street, setStreet] = useState('');
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
          task={task}
          setTask={setTask}
          modalActive={modalActive}
          setModalActive={setModalActive}
          fio={fio}
          setFio={setFio}
          mobileNum={mobileNum}
          setMobileNum={setMobileNum}
          sity={sity}
          setSity={setSity}
          street={street}
          setStreet={setStreet}
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
        />
        <TaskList
          task={task}
          setTask={setTask}
          setModalActive={setModalActive}
          setFio={setFio}
          setMobileNum={setMobileNum}
          setSity={setSity}
          setStreet={setStreet}
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
