import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import loginService from "../services/login.service";
import "../css/style.css";

import ScreenA from "./screenA";
import ScreenB1 from "./screenB1";
import ScreenB2 from "./screenB2";
import ScreenB3 from "./screenB3";
import ScreenC1 from "./screenC1";
import ScreenC2 from "./screenC2";
import ScreenD from "./screenD";

function Screen() {
  const [sessionId, setSessionId] = useState();
  const location = useLocation();
  useEffect(() => {
    async function login() {
      const res = await loginService.rLogin();
      setSessionId(res.sessionId);
    }
    login();
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/screenA" replace />} />
        <Route path="/screenA" element={<ScreenA />} />
        <Route path="/screenB1" element={<ScreenB1 />} />
        <Route path="/screenB2" element={<ScreenB2 />} />
        <Route path="/screenB3" element={<ScreenB3 />} />
        <Route path="/screenC1" element={<ScreenC1 sessionId={sessionId} />} />
        <Route path="/screenC2" element={<ScreenC2 sessionId={sessionId} />} />
        <Route path="/screenD" element={<ScreenD />} />
      </Routes>
    </>
  );
}

export default Screen;
