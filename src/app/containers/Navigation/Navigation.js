import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../Home/Home";

const Navigation = () => {
  return (
    <Router>
      <NavLink exact to="/" activeClassName="selected"></NavLink>
      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
