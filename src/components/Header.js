import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default class Hedaer extends Component {
  state = {
    buttonState: "on",
    vislble: false
  };
  onClick = () => {
    this.setState({ visible: !this.state.visible });
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
        <div className={this.state.visible ? "btnSection" : ""}>
          <button
            className="menuBtn"
            onClick={this.onClick}
            onMouseOver={this.MouseOver}
            onMouseOut={this.MouseOut}
          >
            <h2>{this.state.buttonState === "on" ? "MOMF" : "ITEM"}</h2>
          </button>
        </div>
        {this.state.visible ? (
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
        ) : (
          ""
        )}
      </div>
    );
  }
}
