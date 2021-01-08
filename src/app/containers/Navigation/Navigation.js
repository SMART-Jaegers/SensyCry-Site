import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Family from "../Family/Family";
import { LayoutStyled } from "./Navigation.styled";
import { Layout } from "antd";
import Message from "../Message/Message";

import Header from "../Headers/HeaderUser/Header";
import Sider from "../Sider/Sider";

const Navigation = () => {
  return (
    <Router>
      <NavLink exact to="/" activeClassName="selected"></NavLink>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <LayoutStyled>
            <Header />
            <Layout>
              <Sider />
              <Route path="/user/main">
                <Main />
              </Route>
              <Route path="/user/family">
                <Family />
              </Route>
              <Route path="/user/message">
                <Message></Message>
              </Route>
            </Layout>
          </LayoutStyled>
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
