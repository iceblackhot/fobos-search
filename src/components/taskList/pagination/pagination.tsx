import {useAppContext} from '../../appContext/appContext';
import './pagination.scss';

export const Pagination = () => {
  const {taskTotal, currentPage, pageRows, setCurrentPage} = useAppContext();
  const rows = [];
  const totalPages = taskTotal / pageRows;
  const taskStart = currentPage * pageRows;
  let taskEnd = (currentPage + 1) * pageRows;

  if (taskEnd > taskTotal) {
    taskEnd = taskTotal;
  }

  for (let i = 0; i < totalPages; i++) {
    let classNameBtn = 'pagination__btns';
    if (currentPage === i) {
      classNameBtn = 'pagination__btns active';
    }
    rows.push(
      <div className={classNameBtn} onClick={() => setCurrentPage(i)} key={i}>
        <span className="pagination__num">{i + 1}</span>
      </div>,
    );

    if (currentPage === i) {
      classNameBtn = 'pagination__btns active';
    }
  }

  return (
    <div className="pagination">
      {rows} ({taskStart}-{taskEnd} из {taskTotal})
    </div>
  );
};
