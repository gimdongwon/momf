import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Recruiting from "./components/pages/Recruiting";
import History from "./components/pages/History";
import People from "./components/pages/People";
import Notice from "./components/pages/Notice";
import Ownsong from "./components/pages/Ownsong";
import Count from "./components/pages/Count";
import { NotFound } from "./components/pages/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/pages/ScrollToTop";
export default class App extends Component {
  componentDidUpdate() {
    window.ScrollTo(0, 0);
  }
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/Recruiting" component={Recruiting} />
              <Route path="/History" component={History} />
              <Route path="/People" component={People} />
              <Route path="/Notice" component={Notice} />
              <Route path="/Ownsong" component={Ownsong} />
              <Route path="/Count" component={Count} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
