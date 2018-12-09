import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import Recruiting from "./pages/Recruiting";

export default class Hedaer extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/Recruiting">Recruiting</Link>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <h1>hi</h1>
      </div>
    );
  }
}
