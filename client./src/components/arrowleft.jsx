import React from "react";

function ArrowLeft({ onClick }) {
  return (
    <div onClick={onClick}>
      <i className="fa fa-chevron-left arrowLeft" aria-hidden="true"></i>
    </div>
  );
}

export default ArrowLeft;
