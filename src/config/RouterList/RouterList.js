import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
