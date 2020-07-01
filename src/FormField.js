import React from "react";
import "./styles.css";

export default function InputType(props) {
  return (
    <div className="row">
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

function ButtonType(props) {
  return (
    <div className="row">
      <button type={props.type} value={props.value} />
    </div>
  );
}
