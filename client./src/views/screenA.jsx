import React, { useEffect } from "react";
import Loading from "../components/loading";
import otherService from "../services/other.service";
import { useNavigate } from "react-router-dom";

function ScreenA() {
  const navigate = useNavigate();

  useEffect(() => {
    async function getScreen() {
      let redirectScreen = localStorage.getItem("screenName");
      if (!redirectScreen) {
        const res = await otherService.rFetchExperiments();
        redirectScreen = res;
      }
      localStorage.setItem("screenName", redirectScreen);
      if (redirectScreen === "noScreenB") {
        redirectScreen = "screenC2";
      }
      navigate(`../${redirectScreen}`, { replace: true });
    }
    getScreen();
  }, [navigate]);

  return (
    <>
      <div id="screenA">
        <Loading width={"4rem"} height={"4rem"} />
      </div>
    </>
  );
}

export default ScreenA;
