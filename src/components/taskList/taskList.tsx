import {useRef} from 'react';
import {ConnectionType} from './connectionType/connectionType';
import {CreateNewTask} from './createNewTask/createNewTask';
import {DoneFaqs} from './doneFaqs/doneFaqs';
import {DoneTasks} from './doneTasks/doneTasks';
import {Faqs} from './faqs/faqs';
import {Pagination} from './pagination/pagination';
import {PrintTasks} from './printTasks/printTasks';
import {RangeCalendar} from './rangeCalendar/rangeCalendar';
import {RequestCount} from './requestCount/requestCount';
import {Search} from './search/search';
import {TaskListTable} from './taskListTable/taskListTable';
import {TaskListTableHeader} from './taskListTableHeader/taskListTableHeader';
import {Tasks} from './tasks/tasks';
import './taskList.scss';
import {useAppContext} from '../appContext/appContext';
import {TableListPreloader} from './taskListTable/TableListPreloader/preloader';

export const TaskList = () => {
  const {showPreloader, showFilters} = useAppContext();

  const reactToPrintRef = useRef<HTMLUListElement | null>(null);

  const classNameTaskList = showFilters ? 'task-list active' : 'task-list';

  return (
    <div className={classNameTaskList}>
      <RequestCount />
      <div id="noPrint" className="task-list__nav">
        <ConnectionType />
        <DoneFaqs />
        <Faqs />
        <RangeCalendar />
        <Search />
        <CreateNewTask />
        <Tasks />
        <DoneTasks />
        <PrintTasks reactToPrintRef={reactToPrintRef} />
      </div>
      <TaskListTableHeader />
      {showPreloader ? <TableListPreloader /> : <TaskListTable reactToPrintRef={reactToPrintRef} />}
      <Pagination />
    </div>
  );
};
