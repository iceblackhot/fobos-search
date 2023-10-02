import {useAppContext} from '../../appContext/appContext';

export const Faqs = () => {
  const {setFilterTaskDone, setFilterTaskType, filterTaskDone, filterTaskType} = useAppContext();

  const getRelFaqs = () => {
    setFilterTaskDone(0);
    setFilterTaskType(2);
  };

  let classNameBtn: string | undefined =
    filterTaskDone === 0 && filterTaskType === 2 ? 'faqs-btn' : undefined;

  return (
    <div className="task-list__controls">
      <button className={classNameBtn} onClick={getRelFaqs}>
        FAQ
      </button>
    </div>
  );
};
