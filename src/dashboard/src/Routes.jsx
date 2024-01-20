/** @format */

// src/dashboard/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Verification from "./pages/Verification";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/verification' component={Verification} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
