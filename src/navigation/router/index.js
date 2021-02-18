import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../../components/layout";
import { Home, Staff } from "../../components/pages";
import { ROOT, STAFF } from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path={ROOT} component={Home} />
          <Route exact path={STAFF} component={Staff} />
        </Switch>
      </div>
    </>
  );
};
