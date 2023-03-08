import {useAppContext} from '../../../appContext/appContext';
import './actionBtnsGroup.scss';

export const ActionBtnsGroup = () => {
  const {setShowModal, setFormData} = useAppContext();

  return (
    <div className="modal-content__action-btns">
      <button type="submit">Зберегти</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowModal(false);
        }}>
        Відміна
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setFormData({type: 'RESET'});
        }}>
        Сброс
      </button>
    </div>
  );
};
