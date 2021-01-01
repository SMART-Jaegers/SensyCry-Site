import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";

const Navigation = () => {
  return (
    <Router>
      <NavLink exact to="/" activeClassName="selected"></NavLink>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
