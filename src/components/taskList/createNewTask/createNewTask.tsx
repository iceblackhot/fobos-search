import {useAppContext} from '../../appContext/appContext';

export const CreateNewTask = () => {
  const {setShowModal, setFormData} = useAppContext();

  return (
    <button
      onClick={() => {
        setFormData({type: 'RESET'});
        setShowModal(true);
      }}>
      Створити заявку
    </button>
  );
};
