import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route exact path="*" render={redirectToHome} />
    </>
  );
}

const redirectToHome = () => <Redirect to="/" />;

export default App;
