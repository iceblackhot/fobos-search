import {Modal} from '../modal';
import {AdressDetailsInputs} from './adressDetailsInputs/adressDetailsInputs';
import {CityAutoInput} from './cityAutoInput/cityAutoInput';
import {ConnectionOptions} from './connectionOptions/connectionOptions';
import {FioInputs} from './fioInputs/fioInputs';
import {MobileInput} from './mobileInput/mobileInput';
import {ModalTitle} from './modalTitle/modalTitle';
import {StatusOptions} from './statusOptions/statusOptions';
import {PlannedDateCalendar} from './plannedDateCalendar/plannedDateCalendar';
import {CommentInput} from './commentInput/commentInput';
import {WorkerAutoInput} from './workerAutoInput/workerAutoInput';
import {ActionBtnsGroup} from './actionBtnsGroup/actionBtnsGroup';
import {PriorityBtns} from './priorityBtns/priorityBtns';
import {useAppContext} from '../../appContext/appContext';
import {useEffect, useState} from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {HistoryOfChanges} from './historyOfChanges/historyOfChanges';
import {GetInfoByLogin} from './getInfoByLogin/getInfoByLogin';
import './modalContent.scss';

export const ModalContent = () => {
  const {formData, setFormData, saveTask, showModal} = useAppContext();
  const [showDoneModal, setShowDoneModal] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  function taskSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveTask();
  }

  const classNameTaskDoneBtn =
    formData?.taskDone === 0 ? 'btn-wrapper__btn-circle' : 'btn-wrapper__btn-circle active';

  const classNameTaskDoneModal = !showDoneModal
    ? 'btn-wrapper__modal'
    : 'btn-wrapper__modal active';

  const showTaskDoneModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDoneModal(true);
  };

  useEffect(() => {
    if (!showModal) {
      setShowDoneModal(false);
    }
  }, [showModal]);

  const canselTaskDoneModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDoneModal(false);
    // setFormData({type: 'SET_FIELD', field: 'taskDone', payload: 0});
  };

  const showHistoryTable = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowHistory(true);
  };

  const doneTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDoneModal(false);
    setFormData({type: 'SET_FIELD', field: 'taskDone', payload: 1});
  };

  const backDoneTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDoneModal(false);
    setFormData({type: 'SET_FIELD', field: 'taskDone', payload: 0});
  };

  // console.log(formData.id === 0 && formData.type === 2);

  return (
    <div className="modal-content">
      <Modal>
        {showHistory ? (
          <HistoryOfChanges setShowHistory={setShowHistory} />
        ) : (
          <>
            <ModalTitle />
            <button className="modal-content__history-btn" onClick={showHistoryTable}>
              Історія
            </button>
            <form onSubmit={taskSave}>
              <PriorityBtns />
              {formData.id === 0 && formData.type === 2 && <GetInfoByLogin />}
              <FioInputs />
              <MobileInput />
              <div className="modal-content__inputs-adress">
                <CityAutoInput />
              </div>
              <AdressDetailsInputs />
              <div className="modal-content__inputs-data">
                <ConnectionOptions />
                <StatusOptions />
                <PlannedDateCalendar />
              </div>
              <CommentInput />
              <div className="modal-content__worker-wrapper">
                <WorkerAutoInput />
                {formData?.id > 0 && (
                  <div className="btn-wrapper">
                    <div className="btn-wrapper__title">
                      {formData?.taskDone === 0 && <h2>Виконати заявку</h2>}
                      {formData?.taskDone === 1 && <h2>Повернути заявку</h2>}
                    </div>
                    <button
                      value={formData?.taskDone}
                      className="btn-wrapper__btn"
                      onClick={showTaskDoneModal}>
                      {formData?.taskDone === 1 && (
                        <DoneAllIcon className="btn-wrapper__done-ico" />
                      )}
                      <span className={classNameTaskDoneBtn}></span>
                    </button>
                    <div className={classNameTaskDoneModal}>
                      <div className="btn-wrapper__modal-content">
                        <div className="btn-wrapper__modal-title">
                          {formData?.taskDone === 0 && <h1>Ви дійсно бажаете виконати заявку?</h1>}
                          {formData?.taskDone === 1 && <h1>Ви дійсно бажаете повернути заявку?</h1>}
                        </div>
                        <div className="btn-wrapper__modal-btns">
                          {formData?.taskDone === 0 && <button onClick={doneTask}>Так</button>}
                          {formData?.taskDone === 1 && (
                            <button onClick={backDoneTask}>Повернути</button>
                          )}

                          <button onClick={canselTaskDoneModal}>Відміна</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <ActionBtnsGroup />
            </form>
          </>
        )}
      </Modal>
    </div>
  );
};
