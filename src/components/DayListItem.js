import React from "react";
import './DayListItem.scss';

const classNames = require('classnames');

export default function DayListItem(props) {

  const {selected, spots, name } = props;

  const dayListItemClass =  classNames("day-list__item",{
    'day-list__item--selected': selected,
    'day-list__item--full': spots === 0
  });
  
  const formatSpots = function (data) {

    return data === 1 ? `${data} spot remaining` : data === 0 ? `no spots remaining` : `${data} spots remaining`;
  }
  return (

    <li data-testid = "day" className={dayListItemClass} 
    onClick={() => 
    props.setDay(name)
    }
    >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}
