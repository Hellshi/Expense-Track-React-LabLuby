import React from "react";
import "./card.css";

function Card(props) {
  const className = "card " + props.className;
  return <div className={className}>{props.children}</div>;
}

export default Card;
