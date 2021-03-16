import React from "react";
import DayListItem from './DayListItem';


export default function DayList(props) {

   return (
      <ul className="day-list">
        {
          props.days.map(day => (
            <DayListItem
            name={day.name}
            spots={day.spots}
            selected={props.day === day.name}
            setDay={props.setDay}
            />
          ))
        }
      </ul>
   );
}

