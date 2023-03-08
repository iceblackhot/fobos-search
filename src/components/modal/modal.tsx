import {useAppContext} from '../appContext/appContext';
import CloseIcon from '@mui/icons-material/Close';
import './modal.scss';
import {useEffect} from 'react';

type Props = {
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({children}) => {
  const {showModal, setShowModal, calendarCrutch, calendar} = useAppContext();

  let classNameModal = showModal ? 'modal active' : 'modal';
  let classNameModalContent = showModal ? 'modal__content active' : 'modal__content ';

  // console.log(showModal);

  useEffect(() => {
    let body: HTMLBodyElement | null = document.querySelector('body');
    if (showModal) {
      if (body) {
        body.classList.add('active');
      }
    } else {
      if (!showModal) {
        body?.classList.remove('active');
      }
    }
    const close = (e: any) => {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    };

    function checkModalCalendar(this: Window, ev: any) {
      ev.stopImmediatePropagation();
      ev.stopPropagation();

      if (ev.target != null) {
        if (ev.target.id === 'modal_wrap') {
          if (showModal) {
            if (calendar && calendarCrutch) {
              calendar.close();
            }
          }
        }
      }
    }
    window.addEventListener('keydown', close);
    window.addEventListener('mousedown', checkModalCalendar);
    //return () => window.removeEventListener('keydown', close);
  }, [showModal, setShowModal]);

  return (
    <div className={classNameModal} id="modal_wrap">
      <div className={classNameModalContent}>
        <CloseIcon
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            color: '#3b9efa',
          }}
          onClick={() => {
            setShowModal(false);
          }}
        />
        {children}
      </div>
    </div>
  );
};
