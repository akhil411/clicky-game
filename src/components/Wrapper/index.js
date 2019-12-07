import React from "react";
import "./style.css";

function Wrapper(props) {
  console.log(props);
  const wrapperClass = "wrapper" + (props.gameEnded? " game-ended": "");

  return <div className={wrapperClass}>{props.children}</div>;
}

export default Wrapper;
