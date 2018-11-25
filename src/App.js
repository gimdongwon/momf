import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import { Recruiting } from "./components/pages/Recruiting";
import { NotFound } from "./components/pages/NotFound";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>MOMF</title>
          </Helmet>
          <Switch>
            <Route exact path="/Recruiting" component={() => Recruiting} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
