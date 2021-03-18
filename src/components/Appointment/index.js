import React from "react";
import '../Appointment/styles.scss'
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty'



export default function Appointment(props) {
  return (
    <article className={"appointment"}>
      < Header
        time={props.time}
      />
      {
        !props.interview && < Empty />
      }
      {
        props.interview && < Show
          interviewer={props.interview.interviewer.name}
          student={props.interview.student}
        />
      }

    </article>
  )
};