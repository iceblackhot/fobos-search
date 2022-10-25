import React from 'react';
import {useAuth} from '../../hooks/useAuth';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import './finishTaskModal.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FinishTaskModal({
  task,
  setTask,
  id,
  open,
  setOpen,
  editMode,
  setEditMode,
  setModalActive,
  doneMode,
}) {
  const {token} = useAuth();

  const handleClickOpen = (e) => {
    e.stopPropagation();
    setEditMode(id);
    task.filter((currTask) => {
      if (currTask.id === editMode) {
        setOpen(true);
      }
    });
  };

  // console.log(editMode);

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
    setEditMode(false);
    setModalActive(false);
  };

  function handleDoneTask(e) {
    e.stopPropagation();
    let completeTask = 1;
    fetch(process.env.REACT_APP_URL_EDIT_TASKDONE + editMode, {
      method: 'post',
      mode: 'cors',
      withCredentials: true,
      body: JSON.stringify({
        taskDone: completeTask,
      }),
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          if (result.status === 200 && Number(result.id) === editMode) {
            let newTask = task.filter((obj) => obj.id !== Number(result.id));
            setTask(newTask);
          }
        },
        (error) => {
          console.log(error);
        },
      );
    setOpen(false);
    setEditMode(false);
    setModalActive(false);
  }

  return (
    <div>
      {doneMode ? (
        <DoneAllIcon style={{fontSize: '1.2rem', color: '#2dcf40'}} />
      ) : (
        <TaskAltIcon
          className="task-done__btn"
          style={{fontSize: '1.2rem', color: '#84c4ff'}}
          id="noPrint"
          onClick={handleClickOpen}
        />
      )}

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{'Виконати заявку'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Ви дійсно бажаєте виконати заявку?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{fontSize: '12px'}} onClick={handleClose}>
            Скасувати
          </Button>
          <Button style={{fontSize: '12px'}} onClick={handleDoneTask}>
            Виконати
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
