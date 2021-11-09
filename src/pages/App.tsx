import Layout from "@components/Layout";
import React from "react";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
