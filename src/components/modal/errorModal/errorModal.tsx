import {useAppContext} from '../../appContext/appContext';
import CloseIcon from '@mui/icons-material/Close';
import './errorModal.scss';

export const ErrorModal: React.FC = () => {
  const {error, setError} = useAppContext();

  let classNameModalLayout = error ? 'error-modal active' : 'error-modal';
  let classNameModalContent = error ? 'error-modal__content active' : 'error-modal__content';

  return (
    <>
      <button
        className="error-modal__btn"
        onClick={() => {
          setError('Error');
        }}>
        Error
      </button>
      <div className={classNameModalLayout}>
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
              setError(null);
            }}
          />
          <span className="error-modal__info">{error}</span>
        </div>
      </div>
    </>
  );
};
