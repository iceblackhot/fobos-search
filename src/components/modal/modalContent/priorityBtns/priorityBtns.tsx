import {TaskPriority, TaskType} from '../../../../@types/ftypes.d';
import {useAppContext} from '../../../appContext/appContext';
import './priorityBtns.scss';

export const PriorityBtns = () => {
  const {formData, filterTaskDone, setFormData} = useAppContext();

  // console.log(formData?.type);
  // console.log(formData?.priority);

  const radioHandlerType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({type: 'SET_FIELD', field: 'type', payload: Number(event.target.value)});
  };

  const radioHandlerPriority = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({type: 'SET_FIELD', field: 'priority', payload: Number(event.target.value)});
  };

  return (
    <div className="modal-content__options">
      <div className="modal-content__options_type">
        <div className="modal-content__options_btn">
          <input
            id="type_1"
            type="radio"
            value="1"
            name="type"
            checked={formData.type === TaskType.NEW_CONN}
            onChange={radioHandlerType}
            readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
          />
          <label htmlFor="type_1">Підключення</label>
        </div>
        <div className="modal-content__options_btn">
          <input
            id="type_2"
            type="radio"
            value="2"
            name="type"
            checked={formData.type === TaskType.FUCK}
            onChange={radioHandlerType}
            readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
          />
          <label htmlFor="type_2">faq</label>
        </div>
      </div>
      <div className="modal-content__options_priority">
        <div className="modal-content__options_btn">
          <input
            id="priority_1"
            type="radio"
            value="1"
            name="priority"
            checked={formData.priority === TaskPriority.NORMAL}
            onChange={radioHandlerPriority}
            readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
          />
          <label htmlFor="priority_1">Звичайна</label>
        </div>
        <div className="modal-content__options_btn">
          <input
            id="priority_2"
            type="radio"
            value="2"
            name="priority"
            checked={formData.priority === TaskPriority.HIGH}
            onChange={radioHandlerPriority}
            readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
          />
          <label htmlFor="priority_2">Важлива</label>
        </div>
        <div className="modal-content__options_btn">
          <input
            id="priority_3"
            type="radio"
            value="3"
            name="priority"
            checked={formData.priority === TaskPriority.CRITICAL}
            onChange={radioHandlerPriority}
            readOnly={formData?.id > 0 && filterTaskDone === 1 && true}
          />
          <label htmlFor="priority_3">Критична</label>
        </div>
      </div>
    </div>
  );
};
