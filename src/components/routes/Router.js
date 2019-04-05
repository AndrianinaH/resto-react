import React from "react";
import { Route, Link, BrowserRouter, Redirect, Switch } from "react-router-dom";

import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Resto from "../pages/restos/Resto";

const loggedIn = false;

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Resto} />
        <Route path="/menu/:id" exact component={Menu} />
        <Route path="/login" exact component={Login} />
        <Route
          path="/admin"
          exact
          render={() =>
            loggedIn ? <Admin /> : <Redirect to={{ pathname: "/login" }} />
          }
        />
        <Redirect to={{ pathname: "/" }} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
