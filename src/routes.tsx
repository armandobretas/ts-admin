/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Password from "./pages/Password";
import _Layout from "./components/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/senha" component={Password} />
        <_Layout>
          <Route path="/admin" component={Home} />
          <Route path="/users" component={Users} />
        </_Layout>
      </Switch>
    </BrowserRouter>
  );
}
