import React from "react";
import { Switch, Route } from "react-router-dom";
import { SecureRoute } from "@okta/okta-react";

import Navbar from "../../components/layout";
import { Home, Staff } from "../../components/pages";
import { ROOT, STAFF } from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path={ROOT} component={Home} />
        <SecureRoute exact path={STAFF} component={Staff} />
      </Switch>
    </>
  );
};
