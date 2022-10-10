import React from 'react';

export const ConnectionOption = ({disabled, connTypeList, connTypeId, setConnTypeId}) => {
  const handleChangeType = (e) => {
    e.preventDefault();
    connTypeList.filter((obj) => {
      if (obj.id.toString() === e.currentTarget.value) {
        console.log(obj);
        setConnTypeId(obj.id);
        return obj;
      }
    });
  };

  // console.log(connTypeId);

  return (
    <div>
      <select
        style={{width: '100%'}}
        placeholder="Тип підкл."
        value={connTypeId}
        disabled={disabled}
        onChange={handleChangeType}>
        {connTypeList.map((obj) => (
          <option key={obj.id} value={obj.id}>
            {obj.typeConnection}
          </option>
        ))}
      </select>
    </div>
  );
};
