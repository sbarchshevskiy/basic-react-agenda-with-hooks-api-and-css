import React from "react";
const classNames = require('classnames');





export default function DayListItem(props) {

  

  const formatSpots = function (data) {
    data = props.spots;
    return `${data} spots available`
  }

  console.log('format spots' , formatSpots);


  return (
  
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.spots}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>

  );

}


// export default function DayListItem(props) {

//   const dayListItemClass = classNames("text", {
//     'text--regular': props.regular,
//     'text--light': props.light,

//   });
//   return (
//     <li onClick={() => props.setDay(props.name)}>
//       className={dayListItemClass}
//       spots={props.spots}
//       {props.children}
//     </li>
 
//   );

// }
// export default function DayListItem(props) {

//    const dayListItemClass = classNames("day", {
//       'name': props.String,
//       'spots': props.String,
//       'full': props.Boolean,
//       'day': props.String,
//       'setDay': props.Function
//    });
//    return (
//       <dayListItem
//          className={dayListItemClass}
//          spots={props.spots}
//          full={props.spots === 0}
//          day={props.day}
//          setDay={props.setDay}
//       >
//          {props.children}
//       </dayListItem>
//    );



// }
