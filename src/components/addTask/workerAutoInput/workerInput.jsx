import React, {useState} from 'react';
import './workerAutoInput.scss';

export const WorkerInput = ({optionWorker, setOptionWorker}) => {
  const [open, setOpen] = useState(false);

  let workerNames = [
    {name: 'Котэ'},
    {name: 'Хакир'},
    {name: 'Евгений'},
    {name: 'Дэнчик'},
    {name: 'Мишаня'},
  ];

  let filtredWorker = workerNames.filter((worker) => {
    return worker.name.toLowerCase().includes(optionWorker.toLowerCase());
  });

  let workerList = filtredWorker.map((worker, index) => {
    function handleChangeWorker() {
      setOptionWorker(worker.name);
      setOpen(false);
    }

    if (optionWorker) {
      return (
        <div
          className={open ? 'optionWorker' : 'optionWorker hidden'}
          onClick={handleChangeWorker}
          key={index}>
          <span style={{color: 'grey', fontSize: '15px'}}>{worker.name}</span>
        </div>
      );
    }
  });

  return (
    <div>
      {workerList}
      <input
        type="text"
        placeholder="Сотрудник"
        value={optionWorker}
        onChange={(e) => {
          setOptionWorker(e.target.value);
          setOpen(true);
        }}
      />
    </div>
  );
};
