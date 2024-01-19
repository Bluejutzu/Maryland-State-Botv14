/** @format */

// src/dashboard/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Home from "./pages/Home";
import News from "./pages/News";
import Verification from "./pages/Verification";

const App = () => {
  return (
    <Router>
      <Header />
      <MobileMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/verification' component={Verification} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
