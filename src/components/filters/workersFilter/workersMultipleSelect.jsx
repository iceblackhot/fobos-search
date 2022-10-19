import React, {useState} from 'react';

export const WorkersMultipleSelect = ({workerNames, task, setFiltered, classDropViewport}) => {
  const [filterWorkerSearchValue, setFilterWorkerSearchValue] = useState('');

  const [filterWorkerSelectValue, setFilterWorkerSelectValue] = useState([]);

  let newTaskList = [...task];

  function onChangeWorkerSearchValue(e) {
    let str = e.target.value;
    str.replace(/[^A-Za-z0-9А-Яа-я]/, '');
    setFilterWorkerSearchValue(str);
  }

  function onFilterWorkerReset() {
    setFilterWorkerSearchValue('');
    setFilterWorkerSelectValue([]);
    setFiltered(task);
  }

  function onChangeWorkerFilter(e) {
    let tmpFilterWorkerSelectValue = [...filterWorkerSelectValue];
    let index = tmpFilterWorkerSelectValue.indexOf(e.target.value);

    if (index >= 0) {
      tmpFilterWorkerSelectValue.splice(index, 1);
    } else {
      tmpFilterWorkerSelectValue.push(e.target.value);
    }
    setFilterWorkerSelectValue(tmpFilterWorkerSelectValue);

    let currWorkerIndex = tmpFilterWorkerSelectValue.map((obj) => {
      return Number(obj);
    });
    // console.log(currWorkerIndex);

    newTaskList = [...task].filter((obj) => currWorkerIndex.includes(obj.workerId));

    setFiltered(newTaskList);
  }

  return (
    <div>
      <div className="search-filters__header">
        <input
          placeholder="Обрати робітника"
          type="text"
          value={filterWorkerSearchValue}
          onChange={onChangeWorkerSearchValue}></input>
        <button onClick={onFilterWorkerReset}>reset</button>
      </div>
      <select
        className={classDropViewport}
        name="worker"
        multiple={true}
        onChange={onChangeWorkerFilter}
        value={filterWorkerSelectValue}>
        {workerNames.map((obj) => {
          if (
            (Array.isArray(filterWorkerSelectValue) &&
              filterWorkerSelectValue.indexOf(obj.id.toString()) >= 0) ||
            obj.workerName.toLowerCase().includes(filterWorkerSearchValue.toLowerCase())
          ) {
            return (
              <option value={obj.id} key={obj.id}>
                {obj.workerName}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};
