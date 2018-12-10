import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Recruiting from "./components/pages/Recruiting";
import History from "./components/pages/History";
import People from "./components/pages/People";
import Notice from "./components/pages/Notice";
import Ownsong from "./components/pages/Ownsong";
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
            <Route path="/Recruiting" component={Recruiting} />
            <Route path="/History" component={History} />
            <Route path="/People" component={People} />
            <Route path="/Notice" component={Notice} />
            <Route path="/Ownsong" component={Ownsong} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
