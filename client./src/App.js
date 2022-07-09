import React from "react";
import { BrowserRouter } from "react-router-dom";

import Screen from "./views/screen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Screen />
      </BrowserRouter>
    </>
  );
}

export default App;
