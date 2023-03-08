import {useEffect, useState} from 'react';
import Select from 'react-select';
import {useAppContext} from '../../../appContext/appContext';
import './workerAutoInput.scss';

type OptionTypeWorker = {
  value: number;
  label: string;
};

export const WorkerAutoInput = () => {
  const {filterWorkerList, formData, filterTaskDone, setFormData} = useAppContext();

  const [curValueWorker, setCurValueWorker] = useState<OptionTypeWorker | null>(null);

  useEffect(() => {
    if (formData) {
      if (formData.workerId > 0) {
        setCurValueWorker({value: formData.workerId, label: formData.workerName});
      } else {
        setCurValueWorker(null);
      }
    }
  }, [formData]);

  return (
    <div className="modal-content__inputs-workers">
      <Select
        id="worker-input"
        classNamePrefix="custom-select"
        value={curValueWorker}
        onChange={(newValue) => {
          if (newValue) {
            console.log(newValue);
            setFormData({type: 'SET_FIELD', field: 'workerId', payload: newValue.value});
            setFormData({type: 'SET_FIELD', field: 'workerName', payload: newValue.label});
          }
          setCurValueWorker(newValue);
        }}
        options={filterWorkerList.map((opt) => ({value: opt.id, label: opt.name}))}
        isClearable={true}
        placeholder="Обрати робітника"
        loadingMessage={() => 'Пошук...'}
        isLoading={!filterWorkerList.length ? true : false}
        isDisabled={formData?.id > 0 && filterTaskDone === 1 && true}
        hideSelectedOptions
      />
      <div className="modal-content__done-btn"></div>
    </div>
  );
};
