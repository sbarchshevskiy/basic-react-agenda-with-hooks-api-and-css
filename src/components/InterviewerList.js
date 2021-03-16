import React from "react";
import InterviewerListItem from './InterviewerListItem';
const classNames = require('classnames');

export default function InterviewerList(props) {

  return (
    <section className="interviewers">{

      props.interviewers.map(interviewers => (
        <InterviewerListItem
          id={interviewers.id}
          name={interviewers.name}
          avatar={interviewers.avatar} 
        />
      ))
    }
    </section>

  );

}
