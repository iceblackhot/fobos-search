import React, {useEffect, useState} from 'react';
import './workerAutoInput.scss';

export const WorkerInput = ({workerNames, worker, setWorker, workerId, setWorkerId, cityId}) => {
  // let disabled = '';

  // let newWorkerNames = [...workerNames].filter((Obj) => Obj.cityId === cityId);

  // if (newWorkerNames.length === 0) {
  //   newWorkerNames = [...workerNames];
  //   disabled = 'disabled';
  // }

  // disabled={disabled}

  function handleChangeWorker(e) {
    e.preventDefault();

    let currWorker = [...workerNames].filter((obj) => {
      if (obj.id.toString() === e.currentTarget.value) {
        return obj;
      }
    });
    // console.log(currWorker[0]);
    setWorker(currWorker[0].workerName);
    if (workerNames.length === 0) {
      workerNames = [...workerNames].filter((Obj) => Obj.cityId !== cityId);
    }
    setWorkerId(Number(e.currentTarget.value));
  }

  useEffect(() => {
    if (workerNames.length > 0) {
      setWorkerId(workerNames[0].id);
      setWorker(workerNames[0].workerName);
    }
  }, [workerNames.length]);

  return (
    <div>
      <select value={workerId} onChange={handleChangeWorker}>
        {workerNames.map((obj) => {
          return (
            <option key={obj.id} value={obj.id}>
              {obj.workerName}
            </option>
          );
        })}
      </select>
    </div>
  );
};
