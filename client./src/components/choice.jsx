import React from "react";

function Choice({ name, getValue, className }) {
  function setValue() {
    getValue(name);
  }

  return (
    <>
      <div className={`choice ${className}`}>
        <li className="list-group-item" onClick={setValue}>
          <h2>{name}</h2>
        </li>
      </div>
    </>
  );
}

export default Choice;
