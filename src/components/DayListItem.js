import React from "react";
const classNames = require('classnames');


export default function DayListItem(props) {

   const dayListItemClass = classNames("day", {
      'name': props.String,
      'spots': props.String,
      'full': props.Boolean,
      'day': props.String,
      'setDay': props.Function
   });
   return (
      <dayListItem
         className={dayListItemClass}
         spots={props.spots}
         full={props.spots === 0}
         day={props.day}
         setDay={props.setDay}
      >
         {props.children}
      </dayListItem>
   );



}
