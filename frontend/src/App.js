import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import landing from "./pages/landing";
import gallery from "./pages/gallery";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={landing} />
        <Route path="/gallery" component={gallery} />
      </Switch>
    );
  }
}

export default App;
