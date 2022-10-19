import React from 'react';
import Select from 'react-select';
import './workerAutoInput.scss';

export const WorkerInput = ({workerNames, setWorker, workerId, setWorkerId, disabled}) => {
  const options = workerNames.map((workerObj) => ({
    value: workerObj.id,
    label: workerObj.workerName,
  }));

  function handleChangeWorker(selectedOption, actionMeta) {
    // console.log(selectedOption);
    if (selectedOption) {
      setWorkerId(selectedOption.value ? selectedOption.value : 0);
      setWorker(selectedOption.label ? selectedOption.label : '');
    } else {
      setWorker('');
      setWorkerId('');
    }
  }

  return (
    <div className="add-task__inputs-workers">
      <Select
        classNamePrefix="custom-select"
        value={workerId ? options.filter((worker) => worker.value === workerId) : ''}
        onChange={handleChangeWorker}
        options={options}
        isClearable={true}
        placeholder="Обрати робітника"
        loadingMessage={() => 'Пошук...'}
        isLoading={!workerNames.length ? true : false}
        isDisabled={disabled}
        hideSelectedOptions
      />
    </div>
  );
};
