import React, {useCallback} from 'react';
import {Preloader} from '../../preloader/preloader';

export const DoneTasks = ({
  setDoneMode,
  setDoneTasks,
  isLoaded,
  setIsLoaded,
  setTotalPage,
  fetchTasks,
  setFaqMode,
  setType,
}) => {
  const fetchDoneTasks = useCallback(() => {
    setType(1);
    setFaqMode(false);
    setDoneTasks(1);
    setDoneMode(1);
    fetch(process.env.REACT_APP_URL_COUNT_DONE_REQ, {
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

  if (!isLoaded) return <Preloader />;

  return (
    <div>
      <button onClick={fetchDoneTasks}>Виконані заявки</button>
    </div>
  );
};
