import React from "react";
import { useHistory } from "react-router-dom";
import { Security } from "@okta/okta-react";

import { config } from "./config/oktaConfig";
import { RouterConfig } from "./navigation/router";

function App() {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push("/login");
  };

  return (
    <Security {...config} onAuthRequired={onAuthRequired}>
      <RouterConfig />
    </Security>
  );
}

export default App;
