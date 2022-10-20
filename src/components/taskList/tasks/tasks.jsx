import React, {useCallback} from 'react';
import {Preloader} from '../../preloader/preloader';

export const Tasks = ({
  setDoneMode,
  setTotalPage,
  setDoneTasks,
  setIsLoaded,
  fetchTasks,
  setFaqMode,
  setType,
}) => {
  const fetchRelTasks = useCallback(() => {
    setType(1);
    setFaqMode(false);
    setDoneTasks(0);
    setDoneMode(0);
    fetch(process.env.REACT_APP_URL_COUNT_RELEVANT_REQ, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          // console.log(result.values[0]['COUNT(id)']);
          let totalReq = result.values[0]['COUNT(id)'];
          let totalPages = Math.ceil(totalReq / 3);
          setTotalPage(totalPages);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          // setError(error);
        },
      );
    fetchTasks();
  }, []);

  return (
    <div>
      <button onClick={fetchRelTasks}>Заявки</button>
    </div>
  );
};
