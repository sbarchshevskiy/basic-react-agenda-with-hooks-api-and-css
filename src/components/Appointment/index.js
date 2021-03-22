import React from "react";
import '../Appointment/styles.scss'
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty'
import Error from 'components/Appointment/Error'
import Status from 'components/Appointment/Status';
import useVisualMode from 'hooks/useVisualMode'
import Form from 'components/Appointment/Form';
import Confirm from 'components/Appointment/Confirm';





export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const CONFIRM = "CONFIRM"
  const EDIT = "EDIT";
  const DELETE = "DELETE";
  const SAVE = "SAVE";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY

  );


  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVE);

    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function deleteApp() {
    transition(DELETE, true)
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(err => transition(ERROR_DELETE, true))

  }


  return (
    <article className="appointment">
      < Header
        bookInterview={props.bookInterview}
        time={props.time}
      />
      {
        <Empty
          // bookInterview={props.bookInterview}
          onAdd={() => {
            console.log("Clicked onAdd")
            transition(CREATE);
          }}
        />
      }

      {
        mode === SHOW &&
        < Show
          interviewer={props.interview.interviewer.name}
          student={props.interview.student}
          avatar={props.avatar}

        />
      }
      {
        mode === CREATE &&
        < Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={deleteApp}
          transition={transition}
        />
      }
      {
        mode === CONFIRM &&
        < Confirm
          onSave={save}
          onCancel={back}
        />

      }

      {
        mode === EDIT &&
        < Form
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          onSave={save}
          onCancel={back}
        />

      }

      {
        mode === DELETE &&
        < Status
        onCancel={back}

        />

      }

      {
        mode === ERROR_SAVE &&
        < Error
        onCancel={back}

        />

      }

      {
        mode === ERROR_DELETE &&
        < Error
        onCancel={back}

        />

      }

    </article>
  )
};