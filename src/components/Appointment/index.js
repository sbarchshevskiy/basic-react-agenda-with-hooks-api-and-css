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

  return (
    <article className={"appointment"}>
      < Header
        time={props.time}
      />

      {
       
        <Empty
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

        />
      }
      {
       mode === CREATE && 
        < Form 
        interviewers={[]}
        
        />
      }

    </article>
  )
};