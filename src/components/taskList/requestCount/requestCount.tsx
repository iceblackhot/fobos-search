import {useAppContext} from '../../appContext/appContext';
import {Pagination} from '../pagination/pagination';
import './requestCount.scss';

export const RequestCount = () => {
  const {taskTotal, filterTaskDone, filterTaskType} = useAppContext();

  return (
    <div id="noPrint" className="task-list__title">
      <div className="task-list__title_holder">
        <h1>
          {filterTaskDone === 0 && filterTaskType === 1 && 'Заплановані заявки'}
          {filterTaskDone === 1 && filterTaskType === 1 && 'Виконані заявки'}
          {filterTaskDone === 0 && filterTaskType === 2 && 'Заплановані FAQ'}
          {filterTaskDone === 1 && filterTaskType === 2 && 'Виконані FAQ'}
        </h1>
        <span>{taskTotal}</span>
      </div>
      <Pagination />
    </div>
  );
};
