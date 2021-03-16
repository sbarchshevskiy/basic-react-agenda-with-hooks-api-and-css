import React from "react";

export default function DayListItem(props) {

  const formatSpots = function (data) {

    return data === 1 ? `${data} spot remaining` : data === 0 ? `no spots remaining` : `${data} spots remaining`;
  }
  return (
  
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>

  );

}
