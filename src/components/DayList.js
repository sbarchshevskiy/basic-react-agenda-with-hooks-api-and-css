import React from "react";
const classNames = require('classnames');


export default function DayList(props) {

   const dayListClass = classNames("dayList", {
      'days': props.Array,
      'day': props.String,
      'selected': props.Boolean,
      'setDay': props.function((nameDay) => {return nameDay})
   });
   return (
      <dayList
         className={dayListClass}
         days={props.days}
         selected={props.name === props.day}
         setDay={props.setDay}

      >
         {props.children}
      </dayList>
   );



}
