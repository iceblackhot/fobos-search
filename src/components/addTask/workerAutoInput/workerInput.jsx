import React from 'react';
import Select from 'react-select';
import './workerAutoInput.scss';

export const WorkerInput = ({
  editMode,
  workerNames,
  worker,
  setWorker,
  workerId,
  setWorkerId,
  disabled,
}) => {
  const options = workerNames.map((workerObj) => ({
    value: workerObj.id,
    label: workerObj.workerName,
  }));

  function handleChangeWorker(newValue) {
    if (newValue) {
      setWorker(newValue.label);
      setWorkerId(newValue.value);
    } else {
      setWorker('');
      setWorkerId('');
    }
  }

  const getValue = () => {
    return workerId ? options.filter((worker) => worker.value === workerId) : '';
  };

  // console.log(worker);
  // console.log(editMode);

  return (
    <div className="add-task__inputs-workers">
      <Select
        value={getValue()}
        classNamePrefix="custom-select"
        onChange={handleChangeWorker}
        options={options}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable
        placeholder="Обрати робітника"
        loadingMessage={() => 'Пошук...'}
        isLoading={!workerNames.length ? true : false}
        isDisabled={disabled}
      />
    </div>
  );
};
