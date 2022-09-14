import React, {useCallback} from 'react';

export const Tasks = ({setTask, setDoneMode}) => {
  const fetchTasks = useCallback(() => {
    setDoneMode(false);
    let done = 0;
    fetch(process.env.REACT_APP_URL_REQUESTS + done, {
      method: 'post',
      mode: 'cors',
      withCredentials: true,
      body: JSON.stringify({
        done,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //   console.log(result);
          // setIsLoaded(true);
          setTask(result.values);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        },
      );
  }, []);
  return (
    <div>
      <button onClick={fetchTasks}>Заявки</button>
    </div>
  );
};
