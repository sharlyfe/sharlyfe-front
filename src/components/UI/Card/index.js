import React from "react";
import "./style.css";
/**
 * @author
 * @function Card
 **/

const Card = props => {
  return (
    <div
      className="card"
      style={{ width: props.width ? props.width : "100px" }}
    >
      {props.children}
    </div>
  );
};

export default Card;
