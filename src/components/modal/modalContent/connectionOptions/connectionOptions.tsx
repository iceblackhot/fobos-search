import {useAppContext} from '../../../appContext/appContext';

export const ConnectionOptions = () => {
  const {formData, setFormData, filterTaskDone} = useAppContext();

  // console.log(formData.connTypeId);

  const options = [
    {id: 0, label: 'Тип підключення'},
    {id: 1, label: 'LAN'},
    {id: 2, label: 'PON'},
  ];

  return (
    <div>
      <select
        disabled={formData?.id > 0 && filterTaskDone === 1 && true}
        value={formData?.connTypeId}
        onChange={(e) => {
          setFormData({type: 'SET_FIELD', field: 'connTypeId', payload: e.target.value});
        }}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
