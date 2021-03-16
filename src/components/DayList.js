import React from "react";
import DayListItem from './DayListItem'



export default function DayList(props) {

   return (
      <div class="DayListItem">
        {
          props.days.map(day => (
            <DayListItem
            name={day.name}
            spots={day.spots}
            selected={day.name === props.name}
            setDay={props.setDay}
            />
          ))
        }
      </div>
   );
}


// <DayList>
// className={dayListClass}
// days={props.days}
// selected={props.name === props.day}
// setDay={props.setDay}
// {props.children}
// </DayList>
