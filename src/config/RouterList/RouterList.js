import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard } from "../../views/Pages/Dashboard";
import { MissionsPage } from "../../views/Pages/Missions";

export const RouterList = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/missions">
          <MissionsPage />
        </Route>
      </Switch>
    </Router>
  );
};
