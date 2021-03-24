import React, { useEffect } from "react";
import '../Appointment/styles.scss'
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty'
import Error from 'components/Appointment/Error'
import Status from 'components/Appointment/Status';
import useVisualMode from 'hooks/useVisualMode'
import Form from 'components/Appointment/Form';
import Confirm from 'components/Appointment/Confirm';
import axios from 'axios';




export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const CONFIRM = "CONFIRM"
  const EDIT = "EDIT";
  const DELETE = "DELETE";
  const SAVING = "SAVING";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY

  );
  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW)
    }
    if (props.interview === null && mode === SHOW) {
      transition(EMPTY)
    }
  }, [transition, mode, props.interview])


  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    axios
      .put(`http://localhost:8001/api/appointments/${props.id}`, {
        interview
      })
      .then(response => {
        props.bookInterview(props.id, interview)
        transition(SHOW)
      })
      .catch(error => {
        console.log("error.mesage: ", error.message)
        transition(ERROR_SAVE, true)
      })
  }


  function deleteApp() {
    transition(DELETE, true)
    axios
      .delete(`http://localhost:8001/api/appointments/${props.id}`)
      .then(response => {
        props.cancelInterview(props.id)
        console.log('axios confirm deleted ', response);
        transition(EMPTY)
      })
      .catch(err => transition(ERROR_DELETE, true))
    console.log('error');
  }


  return (
    <article className="appointment" data-testid="appointment">
      < Header
        time={props.time}
      />
      {mode === EMPTY &&
        <Empty
          onAdd={() => {
            transition(CREATE);
          }}
        />
      }
      {
        mode === SHOW &&
        < Show
          interviewer={props.interview.interviewer.name}
          student={props.interview.student}
          onEdit={() => {
            console.log('pressed edit');
            transition(SHOW)
          }}
          onDelete={() => {
            console.log('pressed delete');
            transition(CONFIRM)
          }}

        />
      }
      {
        mode === CREATE &&
        < Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          selected={props.selected}
        />
      }
      {
        mode === CONFIRM &&
        // confirm deletion
        < Confirm
          prompt={'will be deleted'}
          onConfirm={deleteApp}
          onCancel={back}
        />

      }
      {
        mode === SAVING &&
        // confirm reservation
        < Status
         prompt={"Saving"}
        
        />
      }
      {
        mode === EDIT &&
        < Form
          name={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          onSave={save}
          onCancel={back}
          
        />
      }
      {
        mode === DELETE &&
        < Status
          prompt={'Deleting'}
        />
      }
      {
        mode === ERROR_SAVE &&
        < Error
          prompt={'error while saving'}
          onClose={back}

        />
      }
      {
        mode === ERROR_DELETE &&
        < Error
        prompt={'error while deleting'}
        onClose={back}
        />
      }
    </article>
  )
};