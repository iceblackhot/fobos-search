import React from 'react';
import './printTask.scss';

export const PrintTask = ({print, printContentRef, date}) => {
  return (
    <ul id={print ? 'print' : 'noPrint'} ref={printContentRef}>
      <li>{date}</li>
    </ul>
  );
};
