import React, {useCallback, useEffect} from 'react';

export const DoneTasks = ({setTask, setDoneMode, doneTasks, setDoneTasks, page, setTotalPage}) => {
  const fetchDoneTask = useCallback(() => {
    setDoneTasks(1);
    setDoneMode(true);
    fetch(process.env.REACT_APP_URL_REQUESTS + doneTasks + page, {
      method: 'post',
      mode: 'cors',
      withCredentials: true,
      body: JSON.stringify({
        done: doneTasks,
        page,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //   console.log(result.values);
          // setIsLoaded(true);
          setTask(result.values);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        },
      );
    fetch(process.env.REACT_APP_URL_COUNT_DONE_REQ, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.values[0]['COUNT(id)']);
          let totalReq = result.values[0]['COUNT(id)'];
          let totalPages = Math.ceil(totalReq / 3);
          setTotalPage(totalPages);
          // setIsLoaded(true);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        },
      );
  }, [page, doneTasks]);

  return (
    <div>
      <button onClick={fetchDoneTask}>Виконані заявки</button>
    </div>
  );
};
