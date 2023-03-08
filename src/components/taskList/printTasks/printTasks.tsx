import ReactToPrint from 'react-to-print';
import './printTasks.scss';

type PrintProps = {
  reactToPrintRef: React.RefObject<HTMLUListElement>;
};

export const PrintTasks = ({reactToPrintRef}: PrintProps) => {
  return (
    <ReactToPrint trigger={() => <button>Печать</button>} content={() => reactToPrintRef.current} />
  );
};
