import React from 'react';
import {useAppContext} from '../../appContext/appContext';

export const ConnectionType: React.FC = () => {
  const {setConnTypeId} = useAppContext();

  const options = [
    {id: 0, label: 'Тип підключення'},
    {id: 1, label: 'LAN'},
    {id: 2, label: 'PON'},
  ];

  return (
    <div className="task-list__controls">
      <select
        className="connection-type"
        onChange={(e) => {
          setConnTypeId(Number(e.target.value));
        }}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
