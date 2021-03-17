import React from "react";
const classNames = require('classnames');


export default function Header(props) {

  const HeaderClass = classNames("appointment__time", {
    "appointment__separator": props.separator,
  });
  return (
    <header className={HeaderClass}>
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className={props.separator} />
    </header>

  )
}