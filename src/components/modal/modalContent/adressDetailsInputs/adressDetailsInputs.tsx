import {useAppContext} from '../../../appContext/appContext';
import './adressDetailsInputs.scss';

export const AdressDetailsInputs = () => {
  const {formData, setFormData, filterTaskDone} = useAppContext();

  // console.log(formData.id);

  return (
    <div className="modal-content__inputs-adressdetails">
      <input
        placeholder="Будинок"
        type="text"
        maxLength={10}
        value={formData?.building}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'building', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
      <input
        placeholder="Секція"
        type="text"
        maxLength={10}
        value={formData?.section}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'section', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
      <input
        placeholder="Квартира"
        type="text"
        maxLength={10}
        value={formData?.apartment}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'apartment', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
      <input
        placeholder="Під'їзд"
        type="text"
        maxLength={10}
        value={formData?.entrance}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'entrance', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
      <input
        placeholder="Поверх"
        type="text"
        maxLength={10}
        value={formData?.floor}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'floor', payload: e.target.value});
        }}
        readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
      />
    </div>
  );
};
