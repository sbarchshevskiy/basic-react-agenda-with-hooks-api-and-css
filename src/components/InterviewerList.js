import React from "react";
import PropTypes from "prop-types";
import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';



function InterviewerList(props) {

  
  console.log('props from inter.list ',props);
  const interviewersCurated = props.interviewers.map(int => (
    <InterviewerListItem
      key={int.id}
      name={int.name}
      avatar={int.avatar}
      selected={int.id === props.interviewer}
      setInterviewer={(event) => props.setInterviewer(int.id)}
    />
  ))

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersCurated}</ul>
    </section>
  )
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;


