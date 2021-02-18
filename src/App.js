import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RouterConfig } from "./navigation/router";

function App() {
  return (
    <>
      <Router>
        <RouterConfig />
      </Router>
    </>
  );
}

export default App;
