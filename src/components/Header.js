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
        {this.state.visible ? <div className="btnSection" /> : ""}
        <button
          className="menuBtn"
          onClick={this.onClick}
          onMouseOver={this.MouseOver}
          onMouseOut={this.MouseOut}
        >
          <h2>
            {this.state.buttonState === "on"
              ? "MOMF"
              : this.state.visible
              ? "X"
              : "ITEM"}
          </h2>
        </button>

        {this.state.visible ? (
          <div className="router-menu">
            <ul>
              <Link to="/" onClick={this.onClick}>
                Home
              </Link>
            </ul>
            <ul>
              <Link to="/Recruiting" onClick={this.onClick}>
                Recruiting
              </Link>
            </ul>
            <ul>
              <Link to="/History" onClick={this.onClick}>
                History
              </Link>
            </ul>
            <ul>
              <Link to="/People" onClick={this.onClick}>
                People
              </Link>
            </ul>
            <ul>
              <Link to="/Notice" onClick={this.onClick}>
                Notice
              </Link>
            </ul>
            <ul>
              <Link to="/Ownsong" onClick={this.onClick}>
                Ownsong
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
