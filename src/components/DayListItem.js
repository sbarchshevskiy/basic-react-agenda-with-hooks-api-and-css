import React from "react";
const classNames = require('classnames');





export default function DayListItem(props) {

  

  const formatSpots = function (data) {

    if (data === 1) {
      return `${data} spot remaining`
    } else if (data === 0){
      return `no spots remaining`
    } else {
      return `${data} spots remaining`
    }
  
  }


  return (
  
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
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
