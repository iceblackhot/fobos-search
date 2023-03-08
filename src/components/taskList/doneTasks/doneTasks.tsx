import {useAppContext} from '../../appContext/appContext';

export const DoneTasks = () => {
  const {setFilterTaskDone, setFilterTaskType, filterTaskDone, filterTaskType} = useAppContext();

  const getDoneRequests = () => {
    setFilterTaskDone(1);
    setFilterTaskType(1);
  };

  let classNameBtn: string | undefined =
    filterTaskDone === 1 && filterTaskType === 1 ? 'faqs-btn' : undefined;

  return (
    <button className={classNameBtn} onClick={getDoneRequests}>
      Виконані заявки
    </button>
  );
};
