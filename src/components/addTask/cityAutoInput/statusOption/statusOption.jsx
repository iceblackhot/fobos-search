import React from 'react';

export const StatusOption = ({status, setStatus, statusList, statusId, setStatusId}) => {
  const handleChangeStatus = (e) => {
    e.preventDefault();
    statusList.filter((obj) => {
      if (obj.id.toString() === e.currentTarget.value) {
        setStatus(obj.statusName);
        setStatusId(obj.id);
        return obj;
      }
    });
  };

  return (
    <div>
      <select
        style={{width: '100%'}}
        className="add-task__select"
        value={statusId}
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
