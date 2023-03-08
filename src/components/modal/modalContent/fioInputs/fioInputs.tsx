import {useAppContext} from '../../../appContext/appContext';
import './fioInputs.scss';

export const FioInputs = () => {
  const {formData, setFormData, filterTaskDone} = useAppContext();

  // console.log(formData);

  return (
    <div className="modal-content__inputs-fio">
      <input
        className={
          formData?.lname.length < 3
            ? 'modal-content__lname-input error'
            : 'modal-content__lname-input'
        }
        placeholder="Прізвище"
        type="text"
        value={formData?.lname}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'lname', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
      <input
        className={
          formData?.fname.length < 3
            ? 'modal-content__fname-input error'
            : 'modal-content__fname-input'
        }
        placeholder="Ім'я"
        type="text"
        value={formData?.fname}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'fname', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
      <input
        placeholder="По батькові"
        type="text"
        value={formData?.patronymic}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'patronymic', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
    </div>
  );
};
