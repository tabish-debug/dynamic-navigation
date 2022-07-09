import React from "react";

function ArrowRight({ onClick }) {
  return (
    <div onClick={onClick}>
      <i className="fa fa-chevron-right arrowRight" aria-hidden="true"></i>
    </div>
  );
}

export default ArrowRight;
