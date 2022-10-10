import React, {useCallback} from 'react';

export const Faq = ({
  setTask,
  setTotalPage,
  setIsLoaded,
  setDoneMode,
  setDoneTasks,
  setFaqMode,
  setType,
}) => {
  const fetchFaq = useCallback(() => {
    setType(2);
    setFaqMode(0);
    setDoneMode(0);
    fetch(process.env.REACT_APP_URL_COUNT_RELEVANT_FAQ, {
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
    fetch(process.env.REACT_APP_URL_FAQ, {
      method: 'get',
      mode: 'cors',
      withCredentials: true,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.status);
          if (result.status === 200) {
            setTask(result.values);
          }
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          // setError(error);
        },
      );
  }, []);

  return (
    <div>
      <button onClick={fetchFaq}>Faq</button>
    </div>
  );
};
