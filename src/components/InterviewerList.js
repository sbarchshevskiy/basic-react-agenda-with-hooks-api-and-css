import React from "react";
import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';



export default function InterviewerList(props) {

  const interviewers = props.interviewers.map(int => (
    <InterviewerListItem
      key={int.id}
      name={int.name}
      avatar={int.avatar}
      selected={int.id === props.int}
      setInterviewer={(event) => props.setInterviewer(int.id)}
      onChange={(event) => props.onChange(int.id)}
    />
  ))

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )
}


