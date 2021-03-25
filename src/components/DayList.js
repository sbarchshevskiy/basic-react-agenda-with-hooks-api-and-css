import React from "react";
import DayListItem from './DayListItem';


export default function DayList(props) {

   return (
      <ul className="DayListItem">
        {
          props.days.map(day => (
            <DayListItem
            key={day.id}
            name={day.name}
            spots={day.spots}
            selected={props.day === day.name}
            setDay={event => props.setDay(day.name)}
            />
          ))
        }
      </ul>
   );
}

