import React from "react";
import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';
import PropTypes from 'prop-types'; 


export default function InterviewerList(props) {

  const interviewers = props.interviewers.map(int => (
    <InterviewerListItem
      id={int.id}
      name={int.name}
      avatar={int.avatar}
      selected={int.id === props.value}
      setInterviewer={(event) => props.onChange(int.id)}
    />
  ))

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )

}


// export default InterviewerList.propTypes = {

//   interviewers: PropTypes.array.isRequired
// };