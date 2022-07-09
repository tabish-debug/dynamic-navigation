import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowLeft from "../components/arrowleft";

function ScreenD() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    navigate(`../${location?.state?.prevPath}`, {
      replace: true,
      state: { name: location?.state?.title, back: true },
    });
  }

  return (
    <>
      <ArrowLeft onClick={handleClick} />
      <div id="sreenD">
        <i className="fa fa-check checkIcon" aria-hidden="true"></i>
      </div>
    </>
  );
}

export default ScreenD;
