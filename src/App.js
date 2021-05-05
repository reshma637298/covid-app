import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import India from "./components/India";
import State from "./components/State";
import World from "./components/World";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/India">
            <India />
          </Route>
          <Route path="/World">
            <World />
          </Route>
          <Route path="/State">
            <State />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
