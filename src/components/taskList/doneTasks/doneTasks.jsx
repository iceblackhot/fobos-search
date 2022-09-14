import React, {useCallback, useEffect} from 'react';

export const DoneTasks = ({setTask, setDoneMode}) => {
  const fetchDoneTasks = useCallback(() => {
    setDoneMode(true);
    let done = 1;
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
          //   console.log(result.values);
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
      <button onClick={fetchDoneTasks}>Виконані заявки</button>
    </div>
  );
};
