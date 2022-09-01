import React from 'react';
import Select from 'react-select';
import './workerAutoInput.scss';

export const WorkerInput = ({workerNames, worker, setWorker, setWorkerId}) => {
  const options = workerNames.map((workerObj) => ({
    value: workerObj.id,
    label: workerObj.workerName,
  }));

  function handleChangeWorker(event) {
    // console.log(event === null);
    // if (!event) {
    //   event = {
    //     value: '',
    //     label: '',
    //   };
    // } else {
    setWorker(event.label);
    setWorkerId(event.value);
    // }
  }

  // console.log(workerNames);

  return (
    <div className="add-task__inputs-workers">
      <Select
        value={options.filter((option) => option.label === worker)}
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
