import React, {useCallback} from 'react';

export const DoneFaq = ({
  setTask,
  setTotalPage,
  setIsLoaded,
  setDoneMode,
  setDoneTasks,
  fetchTasks,
  setFaqMode,
  setType,
}) => {
  const fetchDoneFaq = useCallback(() => {
    setType(2);
    setFaqMode(1);
    setDoneMode(1);
    setDoneTasks(1);
    fetch(process.env.REACT_APP_URL_COUNT_DONE_FAQ, {
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
    // fetch(process.env.REACT_APP_URL_DONE_FAQ, {
    //   method: 'get',
    //   mode: 'cors',
    //   withCredentials: true,
    // })
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       // console.log(result.status);
    //       if (result.status === 200) {
    //         setTask(result.values);
    //       }
    //       setIsLoaded(true);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       // setError(error);
    //     },
    //   );
  }, []);

  return (
    <div>
      <button onClick={fetchDoneFaq}>Виконані Faq</button>
    </div>
  );
};
