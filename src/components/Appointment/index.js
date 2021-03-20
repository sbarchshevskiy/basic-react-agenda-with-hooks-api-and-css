import React from "react";
import '../Appointment/styles.scss'
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty'
import useVisualMode from 'hooks/useVisualMode'
import Form from 'components/Appointment/Form';




export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY

  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(interviewer, interview)
    
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
          interviewer={props.interview.interviewer.id}
          student={props.interview.student}
          avatar={props.avatar}

        />
      }
      {
        mode === CREATE &&
        < Form
          interviewers={props.interviewers}
          onSave={save}
          transition={transition}
        />
      }

    </article>
  )
};