import Layout from "@components/Layout";
import React from "react";
import { Route, Switch } from "react-router";
import RegisterPage from "./RegisterPage";
import SuccessPage from "./SuccessPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/success" component={SuccessPage} />
        <Route path="/" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
