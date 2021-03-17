import React from "react";
// const classNames = require('classnames');


export default function Empty(props) {
  // const EmptyClass = classNames("appointment__add", {
  //   "appointment__add-button": props.onAdd
  // });

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  )
}