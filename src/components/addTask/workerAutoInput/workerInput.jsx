import React from 'react';
import Select from 'react-select';
import './workerAutoInput.scss';

export const WorkerInput = ({editMode, workerNames, worker, setWorker, workerId, setWorkerId}) => {
  const options = workerNames.map((workerObj) => ({
    value: workerObj.id,
    label: workerObj.workerName,
  }));

  function handleChangeWorker(event) {
    if (event) {
      setWorker(event.label);
      setWorkerId(event.value);
    } else {
      setWorker('');
      setWorkerId('');
    }
  }

  // console.log(workerId);

  return (
    <div className="add-task__inputs-workers">
      <Select
        value={workerId ? options.filter((option) => option.value === workerId) : ''}
        classNamePrefix="custom-select"
        onChange={handleChangeWorker}
        options={options}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable
        placeholder="Обрати робітника"
        loadingMessage={() => 'Пошук...'}
        isLoading={!workerNames.length ? true : false}
      />
    </div>
  );
};
