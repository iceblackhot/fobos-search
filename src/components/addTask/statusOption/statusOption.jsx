import React from 'react';

export const StatusOption = ({setStatus, statusList, statusId, setStatusId, disabled}) => {
  const handleChangeStatus = (e) => {
    e.preventDefault();
    statusList.filter((obj) => {
      if (obj.id.toString() === e.currentTarget.value) {
        // console.log(obj.id);
        setStatus(obj.statusName);
        setStatusId(obj.id);
        return obj;
      }
    });
  };

  // console.log(statusId);

  return (
    <div>
      <select
        style={{width: '100%'}}
        className="add-task__select"
        placeholder="Статус"
        value={statusId}
        disabled={disabled}
        onChange={handleChangeStatus}>
        {statusList.map((obj) => (
          <option key={obj.id} value={obj.id}>
            {obj.statusName}
          </option>
        ))}
      </select>
    </div>
  );
};
