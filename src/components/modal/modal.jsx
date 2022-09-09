import React, {useEffect} from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './modal.scss';

export default function Modal({handleCancel, modalActive, setModalActive, children, setEditMode}) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setModalActive(false);
        setEditMode(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div
      className={modalActive ? 'modal active' : 'modal'}
      // onClick={() => {
      //   setModalActive(false);
      //   setEditMode(false);
      // }}
    >
      <div
        className={modalActive ? 'modal__content active' : 'modal__content '}
        onClick={(e) => e.stopPropagation()}>
        <CloseIcon
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            color: '#3b9efa',
          }}
          onClick={() => {
            setModalActive(false);
            setEditMode(false);
          }}
        />
        {children}
      </div>
    </div>
  );
}
