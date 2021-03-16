import React from "react";
import './DayListItem.scss';

const classNames = require('classnames');


export default function DayListItem(props) {

  const dayListItemClass =  classNames("day-list__item",{
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });
  
  const formatSpots = function (data) {

    return data === 1 ? `${data} spot remaining` : data === 0 ? `no spots remaining` : `${data} spots remaining`;
  }
  return (

    <li className={dayListItemClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>

  );

}
