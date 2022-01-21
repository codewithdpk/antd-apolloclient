import React from "react";

import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../../views/Pages/Dashboard";
import { MissionsPage } from "../../views/Pages/Missions";

export const RouterList = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/missions" exact>
        <MissionsPage />
      </Route>
    </Switch>
  );
};
