import React from "react";

export default function Status(props) {

  const {prompt} = props;
  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{prompt}</h1>
    </main>
  )
}
