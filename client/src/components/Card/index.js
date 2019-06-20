import React from "react";
import "./style.css";

// This file exports the card
const Card = props =>

<div className="card" 
      style={{width: "11rem" }}
      id = {props.id}
      onClick = {props.handleButtonClick}>
  <img 
  className="card-img-top mx-auto cardImage" 
  src= {props.thumbnail} 
  alt= {props.id}
  data-value = {props.id}
  />
</div>

export default Card
