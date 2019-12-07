import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={() => props.clickCard(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
