import {useEffect, useState} from 'react';
import {TaskHistory} from '../../../../@types/ftypes';
import {useAppContext} from '../../../appContext/appContext';
import './historyOfChanges.scss';

export const HistoryOfChanges = ({setShowHistory}: any) => {
  const [history, setHistory] = useState<Array<TaskHistory>>([{date: '', changes: '', login: ''}]);
  const {loadHistory, showModal, formData} = useAppContext();

  const closeHistoryTable = () => {
    setShowHistory(false);
  };

  useEffect(() => {
    if (!showModal) {
      setShowHistory(false);
    }
  }, [showModal]);

  useEffect(() => {
    loadHistory(formData.id, setHistory);
  }, []);

  function formatHistoryDate(date: any) {
    // console.log(typeof date);
    let d = new Date(date);
    let currDate = d.toLocaleString('ua-UA');
    return currDate;
  }

  return (
    <div className="history-table">
      <div className="history-table__title-wrapper">
        <h1>Історія змін</h1>
      </div>
      <button className="history-table__btn" onClick={closeHistoryTable}>
        Назад
      </button>
      <ul className="history-table__header">
        <li className="history-table__header-item">Дата</li>
        <li className="history-table__header-item">Історія змін</li>
      </ul>
      <ul className="history-table__list">
        {history.map((value: TaskHistory, index: number) => {
          return (
            <li className="history-table__item" key={index}>
              <div className="history-table__item-date">{formatHistoryDate(value.date)}</div>
              <div className="history-table__item-changes">{value.changes}</div>
              <div className="history-table__item-changes">{value.login}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
