import React, {useState} from 'react';
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
  const [selectedOption, setSelectedOption] = useState(null);

  const options = workerNames.map((workerObj) => ({
    value: workerObj.id,
    label: workerObj.workerName,
  }));

  function handleChangeWorker(selectedOption, actionMeta) {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      console.log(selectedOption.value ? selectedOption.value : 0);
      // if (event) {
      //   setWorker(event.label);
      setWorkerId(selectedOption.value ? selectedOption.value : 0);
      setWorker(selectedOption.label ? selectedOption.label : '');
      // } else {
      //   setWorker('');
      //   setWorkerId('');
      // }
    }
  }
  // const getValue = () => {
  //   return workerId ? options.filter((worker) => worker.label) : '';
  // };

  console.log(worker);
  console.log(workerId);

  console.log(selectedOption);

  function clear() {
    setSelectedOption({value: null, label: null});
    setWorker('');
    setWorkerId('');
  }

  return (
    <div className="add-task__inputs-workers">
      {/* <Select
        value={getValue()}
        classNamePrefix="custom-select"
        onChange={handleChangeWorker}
        options={options}
        noOptionsMessage={() => 'Не знайдено'}
        isClearable={true}
        placeholder="Обрати робітника"
        loadingMessage={() => 'Пошук...'}
        isLoading={!workerNames.length ? true : false}
        isDisabled={disabled}
      /> */}
      <Select
        classNamePrefix="custom-select"
        // value={
        //   selectedOption ? options.filter((worker) => worker.label === selectedOption.label) : ''
        // }
        defaultValue={selectedOption}
        onChange={handleChangeWorker}
        options={options}
        isClearable={true}
        placeholder="Обрати робітника"
        loadingMessage={() => 'Пошук...'}
        isLoading={!workerNames.length ? true : false}
        isDisabled={disabled}
      />
      <button onClick={clear}>x</button>
    </div>
  );
};
