import React from "react";
import InterviewerListItem from './InterviewerListItem';
const classNames = require('classnames');

export default function InterviewerList(props) {

  return (
    <section className="interviewers">{

      props.interviewers.map(interviewer => (
        <InterviewerListItem
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar} 
        />
      ))
    }
    </section>

  );

}
