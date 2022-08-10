import React, {useState} from 'react';

export const StatusMultipleSelect = ({
  task,
  setFiltered,
  statusList,
  filterStatusSelectValue,
  setFilterStatusSelectValue,
}) => {
  const [filterStatusSearchValue, setFilterStatusSearchValue] = useState('');

  let newTaskList = [...task];

  function onChangeStatusSearchValue(e) {
    let str = e.target.value;
    str.replace(/[^A-Za-z0-9А-Яа-я]/, '');
    setFilterStatusSearchValue(str);
  }

  function onFilterStatusReset() {
    setFilterStatusSearchValue('');
    setFilterStatusSelectValue([]);
    setFiltered(task);
  }

  function onChangeStatusFilter(e) {
    let tmpFilterStatusSelectValue = [...filterStatusSelectValue];

    let index = tmpFilterStatusSelectValue.indexOf(e.target.value);

    if (index >= 0) {
      tmpFilterStatusSelectValue.splice(index, 1);
    } else {
      tmpFilterStatusSelectValue.push(e.target.value);
    }
    setFilterStatusSelectValue(tmpFilterStatusSelectValue);

    let currStatusIndex = tmpFilterStatusSelectValue.map((obj) => {
      return Number(obj);
    });

    newTaskList = [...task].filter((obj) => currStatusIndex.includes(obj.statusId));

    setFiltered(newTaskList);
  }

  return (
    <div>
      <div className="search-filters__header">
        <input
          placeholder="Введите город"
          type="text"
          value={filterStatusSearchValue}
          onChange={onChangeStatusSearchValue}></input>
        <button onClick={onFilterStatusReset}>reset</button>
      </div>
      <select
        className="search-filters__viewport"
        name="city"
        multiple={true}
        onChange={onChangeStatusFilter}
        value={filterStatusSelectValue}>
        {statusList.map((obj) => {
          if (obj.statusName.toLowerCase().includes(filterStatusSearchValue.toLowerCase())) {
            return (
              <option value={obj.id} key={obj.id}>
                {obj.statusName}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};
