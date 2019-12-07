import React from "react";
import "./style.css";

function Title(props) {
  return <div className="main-heading">
            <h1 className="title">{props.heading}</h1>
            <h2>Your Points: {props.points}</h2>
            <h2>Target Points: {props.targetPoints}</h2>
            <h3>{props.message}</h3>
          </div>
}

export default Title;
