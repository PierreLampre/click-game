import React from "react";
import "./pic.css";


function Pic(props) {

  return (
    <div className="pic" onClick={() => props.reSortChars()} >
      <img alt={props.name} src={props.image} id={props.name} key={props.id} />
    </div>
  );
}

export default Pic;