import React, {useCallback} from 'react';
import {Preloader} from '../../preloader/preloader';
import {useAuth} from '../../hooks/useAuth';

export const DoneTasks = ({
  setDoneMode,
  setDoneTasks,
  setIsLoaded,
  setTotalPage,
  fetchTasks,
  setFaqMode,
  setType,
}) => {
  const {token} = useAuth();

  const fetchDoneTasks = useCallback(() => {
    setType(1);
    setFaqMode(false);
    setDoneTasks(1);
    setDoneMode(1);
    fetch(process.env.REACT_APP_URL_COUNT_DONE_REQ, {
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
      <button onClick={fetchDoneTasks}>Виконані заявки</button>
    </div>
  );
};
