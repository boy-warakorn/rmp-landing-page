import Layout from "@components/Layout";
import React from "react";
import { Route, Switch } from "react-router";
import RegisterPage from "./RegisterPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
