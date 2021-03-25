import React from "react";
import './InterviewerListItem.scss'
const classNames = require('classnames');


export default function IntereviewerListItem(props) {
  // props are passed down from the Form componenent
  const 
  { 
    selected, 
    avatar, 
    name, 
    setInterviewer 
  } = props;

  const InterviewerListItemClass = classNames(
    "interviewers__item", {
    'interviewers__item--selected': selected,

  })

  return (
    <li className={InterviewerListItemClass} 
      onClick={setInterviewer}>  
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}  
      />
      {selected && name}
    </li>
  )
}
