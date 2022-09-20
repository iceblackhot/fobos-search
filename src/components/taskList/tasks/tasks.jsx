import React, {useCallback} from 'react';

export const Tasks = ({setTask, setDoneMode, doneTasks, setDoneTasks, page, setTotalPage}) => {
  const fetchTasks = useCallback(() => {
    setDoneTasks(0);
    setDoneMode(false);
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
          console.log(result);
          // setIsLoaded(true);
          setTask(result.values);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        },
      );

    fetch(process.env.REACT_APP_URL_COUNT_RELEVANT_REQ, {
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
      <button onClick={fetchTasks}>Заявки</button>
    </div>
  );
};
