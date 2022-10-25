import React, {useCallback, useEffect, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {useAuth} from '../../hooks/useAuth';
import './search.scss';

export const Search = ({setTask, inputValue, setInputValue, fetchTasks}) => {
  const {token} = useAuth();

  useEffect(() => {
    const fetchCurrTask = () => {
      fetch(process.env.REACT_APP_URL_SEARCH_TASK + inputValue, {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({
          value: inputValue,
        }),
        headers: {
          'content-type': 'application/json',
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            // console.log(result.values);
            setTask(result.values);
            // setIsLoaded(true);
          },
          (error) => {
            // setIsLoaded(true);
            // setError(error);
          },
        );
    };
    // console.log(inputValue);
    if (inputValue) {
      fetchCurrTask();
    } else {
      fetchTasks();
    }
  }, [inputValue]);

  return (
    <div className="search">
      <SearchIcon className="search__ico" />
      <input
        className="search__input"
        type="text"
        placeholder="Пошук..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};
