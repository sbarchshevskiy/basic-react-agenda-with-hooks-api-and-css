import React from "react";
import './InterviewerListItem.scss'
const classNames = require('classnames');


export default function IntereviewerListItem(props) {

  const InterviewerListItemClass = classNames("interviewers__item", {
    'interviewers__item': props.selected,
    "interviewers__item-image": props.avatar
  })

  return (
    <li className={InterviewerListItemClass} onClick={props.setInterviwer}>  
      <img
        className={InterviewerListItemClass}
        src={props.avatar}
        alt={props.name}  
      />
      {props.selected && props.name}
    </li>
  )
}
