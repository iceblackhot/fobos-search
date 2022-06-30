import {useState} from 'react';
import {AddTask} from '../addTask/addTask';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {TaskList} from '../taskList/TaskList';
import './App.scss';

function App() {
  const [task, setTask] = useState([]);

  // console.log(task);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <AddTask task={task} setTask={setTask} />
        <TaskList task={task} setTask={setTask} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
