import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "./pages/Index/";
import Create from "./pages/Create/";
import Edit from "./pages/Edit/";
// import Created from './pages/created';

import GlobalStyle from "./GlobalStyle";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/create" exact component={Create} />
        <Route path="/edit/:clientId" exact component={Edit} />
      </Switch>
      <GlobalStyle />
    </>
  );
}
