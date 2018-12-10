import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default class Hedaer extends Component {
  state = { buttonState: "on" };
  onClick = () => {
    console.log("Hi onClick");
  };
  MouseOver = () => {
    this.setState({ buttonState: "over" });
  };
  MouseOut = () => {
    this.setState({ buttonState: "on" });
  };
  render() {
    return (
      <div className="menu">
        <button
          className="menuBtn"
          onClick={this.onClick}
          onMouseOver={this.MouseOver}
          onMouseOut={this.MouseOut}
        >
          <h2>{this.state.buttonState === "on" ? "momf" : "item"}</h2>
        </button>
        <div className="router-menu">
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/Recruiting">Recruiting</Link>
          </ul>
          <ul>
            <Link to="/History">History</Link>
          </ul>
          <ul>
            <Link to="/People">People</Link>
          </ul>
          <ul>
            <Link to="/Notice">Notice</Link>
          </ul>
          <ul>
            <Link to="/Ownsong">Ownsong</Link>
          </ul>
        </div>
      </div>
    );
  }
}
