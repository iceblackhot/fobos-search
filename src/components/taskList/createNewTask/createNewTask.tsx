import {useAppContext} from '../../appContext/appContext';

export const CreateNewTask = () => {
  const {setShowModal, setFormData} = useAppContext();

  return (
    <div className="task-list__controls">
      <button
        onClick={() => {
          setFormData({type: 'RESET'});
          setShowModal(true);
        }}>
        Створити заявку
      </button>
    </div>
  );
};
