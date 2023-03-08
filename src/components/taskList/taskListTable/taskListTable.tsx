import {useAppContext} from '../../appContext/appContext';
import React from 'react';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import LanIcon from '@mui/icons-material/Lan';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import './taskListTable.scss';

type PrintProps = {
  reactToPrintRef: React.RefObject<HTMLUListElement>;
};

export const TaskListTable = ({reactToPrintRef}: PrintProps) => {
  const {taskList, setFormData, setShowModal} = useAppContext();

  function formatAddDate(date: any) {
    // console.log(typeof date);
    let d = new Date(date);
    let currDate = d.toLocaleString('ua-UA');
    return currDate;
  }

  const getRequestById = (idx: number) => {
    setFormData({type: 'EDIT', task: taskList[idx]});
    setShowModal(true);
  };

  return (
    <ul className="task-list__list" ref={reactToPrintRef}>
      {taskList.map((item, index) => (
        <li
          key={item.id}
          className="task-list__item"
          onClick={(e: React.MouseEvent<HTMLLIElement>) => {
            getRequestById(index);
          }}>
          <div id="noPrint" className="task-list__item-cell">
            {formatAddDate(item.addDate)}
          </div>
          <div className="task-list__item-cell">
            {item.priority === 3 && <WarningAmberRoundedIcon id="noPrint" style={{color: 'red'}} />}
            {item.priority === 2 && (
              <ReportGmailerrorredRoundedIcon id="noPrint" style={{color: '#f4a261'}} />
            )}
            {item.priority === 1 && (
              <LibraryBooksRoundedIcon id="noPrint" style={{color: '#2dcf40'}} />
            )}
            {item.cityName}
          </div>
          <div className="task-list__item-cell">
            {item.type === 2 && (
              <div id="noPrint" className="task-list__faq-ico">
                <EngineeringIcon />
                <span>faq</span>
              </div>
            )}
            {item.type === 1 && (
              <div id="noPrint" className="task-list__faq-ico">
                <SettingsInputHdmiIcon />
                <span>request</span>
              </div>
            )}
            <span>
              <span>Вулиця.</span>
              <br />
              {item.streetName +
                ' буд.' +
                item.building +
                ' секц.' +
                item.section +
                ' кв.' +
                item.apartment +
                ' під.' +
                item.entrance +
                ' пов.' +
                item.floor}
            </span>
          </div>
          <div id="noPrint" className="task-list__item-cell">
            {item.connTypeId === 1 && (
              <div className="task-list__connection-ico">
                <LanIcon />
                <span>lan</span>
              </div>
            )}
            {item.connTypeId === 2 && (
              <div className="task-list__connection-ico">
                <SettingsInputComponentIcon />
                <span>pon</span>
              </div>
            )}

            <span id="noPrint">{item.statusName}</span>
            <span>{item.planDate}</span>
          </div>
          <div className="task-list__item-cell">
            <span>{item.lname}</span>
            <span>{item.fname}</span>
            <span>{item.patronymic}</span>
          </div>
          <div className="task-list__item-cell">
            <span>{item.mobile}</span>
          </div>
          <div className="task-list__item-cell">
            <span>{item.comment}</span>
          </div>
          <div id="noPrint" className="task-list__item-cell">
            {item.taskDone === 1 && (
              <div className="task-list__connection-ico">
                <DoneAllIcon style={{color: '#2dcf40'}} />
                <span>done</span>
              </div>
            )}
            {item.taskDone === 0 && (
              <div className="task-list__connection-ico">
                <WorkHistoryIcon />
                <span>in progress...</span>
              </div>
            )}
            <span>{item.workerName}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
