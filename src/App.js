import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import India from "./components/India";
import State from "./components/State";
import World from "./components/World";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <h2 style={{ textAlign: "center" }}>Covid-19 Data-Sheet</h2>
        <Switch>
          <Route exact path="/India">
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
