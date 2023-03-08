import {useAppContext} from '../../appContext/appContext';

export const DoneFaqs = () => {
  const {setFilterTaskDone, setFilterTaskType, filterTaskDone, filterTaskType} = useAppContext();

  const getDoneFaqs = () => {
    setFilterTaskDone(1);
    setFilterTaskType(2);
  };

  let classNameBtn: string | undefined =
    filterTaskDone === 1 && filterTaskType === 2 ? 'faqs-btn' : undefined;

  return (
    <button className={classNameBtn} onClick={getDoneFaqs}>
      Виконані FAQ
    </button>
  );
};
