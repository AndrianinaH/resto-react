import React from "react";
import { Route, Link, BrowserRouter, Redirect, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Admin from "../pages/Admin";
import ListResto from "../pages/restos/ListResto";
import Resto from "../pages/restos/Resto";

const loggedIn = false;

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={ListResto} />
      <Route path="/resto/:id" exact component={Resto}/>
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
  );
}

export default Router;
