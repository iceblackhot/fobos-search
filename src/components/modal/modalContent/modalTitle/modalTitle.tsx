import {useAppContext} from '../../../appContext/appContext';
import './modalTitle.scss';

export const ModalTitle = () => {
  const {formData} = useAppContext();

  function showTitle() {
    if (formData) {
      if (formData?.id === 0) {
        return <h1>Створити запис</h1>;
      }
      if (formData?.id > 0) {
        return <h1>Редагувати запис</h1>;
      }
    }
  }

  return <div className="modal-content__title">{showTitle()}</div>;
};
