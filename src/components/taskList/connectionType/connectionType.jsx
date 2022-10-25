import React, {useCallback} from 'react';
import {useState} from 'react';
import {useAuth} from '../../hooks/useAuth';
import './connectionType.scss';

export const ConnectionType = ({setTask, setIsLoaded, setDoneMode, setDoneTasks}) => {
  const {token} = useAuth();

  const [value, setValue] = useState(0);

  const fetchPonTasks = useCallback(() => {
    setDoneTasks(0);
    setDoneMode(false);
    fetch(process.env.REACT_APP_URL_SORT_PON, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.status);
          if (result.status === 200) {
            setTask(result.values);
          }
          //   setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          // setError(error);
        },
      );
  }, []);

  const fetchLanTasks = useCallback(() => {
    setDoneTasks(0);
    setDoneMode(false);
    fetch(process.env.REACT_APP_URL_SORT_LAN, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.status);
          if (result.status === 200) {
            setTask(result.values);
          }
          //   setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          // setError(error);
        },
      );
  }, []);

  const filterByConnType = (e) => {
    // console.log(typeof Number(e.target.value));
    console.log(e.target.value);

    if (Number(e.target.value) === 1) {
      fetchLanTasks();
      setValue(0);
    }
    if (Number(e.target.value) === 2) {
      fetchPonTasks();
      setValue(0);
    }
  };

  const options = [
    {id: 0, label: 'Тип підключення'},
    {id: 1, label: 'LAN'},
    {id: 2, label: 'PON'},
  ];

  return (
    <div>
      <select value={value} onChange={filterByConnType} className="connection-type">
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
