import React, {useCallback} from 'react';
import {useAuth} from '../../hooks/useAuth';

export const Faq = ({
  setTask,
  setTotalPage,
  setIsLoaded,
  setDoneMode,
  setDoneTasks,
  fetchTasks,
  setFaqMode,
  setType,
}) => {
  const {token} = useAuth();

  const fetchFaq = useCallback(() => {
    setType(2);
    setFaqMode(0);
    setDoneMode(0);
    setDoneTasks(0);
    fetch(process.env.REACT_APP_URL_COUNT_RELEVANT_FAQ, {
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
      <button onClick={fetchFaq}>Faq</button>
    </div>
  );
};
