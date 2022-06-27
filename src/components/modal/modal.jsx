import React from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './modal.scss';

export default function Modal({active, setActive, children}) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content '}
        onClick={(e) => e.stopPropagation()}>
        <CloseIcon
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            color: '#3b9efa',
          }}
          onClick={() => setActive(false)}
        />
        {children}
      </div>
    </div>
  );
}
