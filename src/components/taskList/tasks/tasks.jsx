import React, {useCallback} from 'react';
import {Preloader} from '../../preloader/preloader';

export const Tasks = ({
  setTask,
  setDoneMode,
  doneTasks,
  setDoneTasks,
  page,
  setTotalPage,
  isLoaded,
  setIsLoaded,
  fetchTasks,
}) => {
  if (!isLoaded) return <Preloader />;

  return (
    <div>
      <button
        onClick={() => {
          setDoneTasks(0);
          setDoneMode(false);
          fetchTasks();
        }}>
        Заявки
      </button>
    </div>
  );
};
