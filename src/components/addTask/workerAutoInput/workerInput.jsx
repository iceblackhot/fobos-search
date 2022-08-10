import React, {useState} from 'react';
import './workerAutoInput.scss';

export const WorkerInput = ({optionWorker, setOptionWorker}) => {
  const [open, setOpen] = useState(false);

  let workerNames = [
    {id: 1, cityId: 1, workerName: 'Серега'},
    {id: 2, cityId: 1, workerName: 'Котэ'},
    {id: 3, cityId: 2, workerName: 'Хакир'},
    {id: 4, cityId: 2, workerName: 'Евгений'},
    {id: 5, cityId: 3, workerName: 'Дэнчик'},
    {id: 6, cityId: 3, workerName: 'Мишаня'},
  ];

  let filtredWorker = workerNames.filter((worker) => {
    return worker.workerName.toLowerCase().includes(optionWorker.toLowerCase());
  });

  let workerList = filtredWorker.map((worker, index) => {
    function handleChangeWorker() {
      setOptionWorker(worker.workerName);
      setOpen(false);
    }

    if (optionWorker) {
      return (
        <div
          className={open ? 'optionWorker' : 'optionWorker hidden'}
          onClick={handleChangeWorker}
          key={index}>
          <span style={{color: 'grey', fontSize: '15px'}}>{worker.workerName}</span>
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
