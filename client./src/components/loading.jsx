import React from "react";

function Loading({ width, height }) {
  return (
    <>
      <div
        className="spinner-border"
        style={{ width: width, height: height }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default Loading;
