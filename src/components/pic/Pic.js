import React from "react";
import "./pic.css";


function Pic(props) {

  return (
    <div className="pic" id="pic" value={props.id} onClick={() => props.whenClicked(props.id)} >
      <img alt={props.name} src={props.image} id={props.name} key={props.id} clicked={props.clicked} />
    </div>
  );
}

export default Pic;