import Layout from "@components/Layout";
import React from "react";
import { Route, Switch } from "react-router";
import RegisterPage from "./RegisterPage";
import SuccessPage from "./SuccessPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </div>
  );
}

export default App;
