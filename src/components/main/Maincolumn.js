import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./Maincolumn.css";
import { Recruiting } from "../pages/Recruiting";

export default class MainColumn extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <div className="main-column">
            <div className="main-item recruiting">
              <hr />
              <Link to="/Recruiting">
                <h2>recruiting-item</h2>
              </Link>
            </div>
            <div className="main-item">
              <h2>item</h2>
            </div>
            <div className="main-item">
              <h2>character</h2>
            </div>
          </div>
          <div className="main-column">
            <div className="main-item">
              <h2>character</h2>
            </div>
            <div className="main-item">
              <h2>out-look-item</h2>
            </div>
            <div className="main-item">
              <h2>history-item</h2>
            </div>
          </div>
          <div className="main-column">
            <div className="main-item">
              <h2>font-item</h2>
            </div>
            <div className="main-item">
              <h2>character</h2>
            </div>
            <div className="main-item">
              <h2>notice-item</h2>
            </div>
          </div>
          <Route path="Recruiting" component={Recruiting} />
        </div>
      </Router>
    );
  }
}
