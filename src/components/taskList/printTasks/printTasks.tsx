import ReactToPrint from 'react-to-print';
import './printTasks.scss';

type PrintProps = {
  reactToPrintRef: React.RefObject<HTMLUListElement>;
};

export const PrintTasks = ({reactToPrintRef}: PrintProps) => {
  return (
    <div className="task-list__controls">
      <ReactToPrint
        trigger={() => <button>Печать</button>}
        content={() => reactToPrintRef.current}
      />
    </div>
  );
};
