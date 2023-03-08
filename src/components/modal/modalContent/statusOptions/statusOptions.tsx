import {useAppContext} from '../../../appContext/appContext';

export const StatusOptions = () => {
  const {formData, filterTaskDone, filterStatusList, setFormData} = useAppContext();

  // console.log(filterStatusList);
  // console.log(formData.statusId);

  return (
    <div>
      <select
        style={{width: '100%'}}
        value={formData.statusId}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setFormData({type: 'SET_FIELD', field: 'statusId', payload: Number(e.target.value)});
          setFormData({
            type: 'SET_FIELD',
            field: 'statusName',
            payload: e.target.selectedOptions[0].label,
          });
        }}
        disabled={formData?.id > 0 && filterTaskDone === 1 && true}>
        {filterStatusList.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
