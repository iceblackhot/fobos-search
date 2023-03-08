import {useAppContext} from '../../appContext/appContext';

export const Tasks = () => {
  const {setFilterTaskDone, setFilterTaskType, filterTaskDone, filterTaskType} = useAppContext();

  const getRelRequests = () => {
    setFilterTaskDone(0);
    setFilterTaskType(1);
  };

  let classNameBtn: string | undefined =
    filterTaskDone === 0 && filterTaskType === 1 ? 'faqs-btn' : undefined;

  return (
    <button className={classNameBtn} onClick={getRelRequests}>
      Заявки
    </button>
  );
};
