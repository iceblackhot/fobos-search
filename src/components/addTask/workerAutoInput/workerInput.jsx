import React, {useEffect, useState} from 'react';
import './workerAutoInput.scss';

export const WorkerInput = ({workerNames, worker, setWorker, workerId, setWorkerId, cityId}) => {
  let disabled = '';

  let newWorkerNames = [...workerNames].filter((Obj) => Obj.cityId === cityId);

  if (newWorkerNames.length === 0) {
    newWorkerNames = [...workerNames];
    disabled = 'disabled';
  }

  function handleChangeWorker(e) {
    e.preventDefault();

    let currWorker = [...workerNames].filter((obj) => {
      if (obj.id.toString() === e.currentTarget.value) {
        return obj;
      }
    });
    // console.log(currWorker[0]);
    setWorker(currWorker[0].workerName);
    if (newWorkerNames.length === 0) {
      newWorkerNames = [...workerNames].filter((Obj) => Obj.cityId !== cityId);
    }
    setWorkerId(Number(e.currentTarget.value));
  }

  useEffect(() => {
    if (newWorkerNames.length > 0) {
      setWorkerId(newWorkerNames[0].id);
      setWorker(newWorkerNames[0].workerName);
    }
  }, [newWorkerNames.length]);

  return (
    <div>
      <select disabled={disabled} value={workerId} onChange={handleChangeWorker}>
        {newWorkerNames.map((obj) => {
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
