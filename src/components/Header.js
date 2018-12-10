import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faAlignJustify,
  faAirFreshener
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Header.css";

library.add(faTimesCircle, faAlignJustify, faAirFreshener);

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
            {this.state.visible ? (
              <FontAwesomeIcon icon="times-circle" size="2x" />
            ) : this.state.buttonState === "on" ? (
              <FontAwesomeIcon icon="air-freshener" size="2x" />
            ) : (
              <FontAwesomeIcon icon="align-justify" size="2x" />
            )}
          </h2>
        </button>
        {this.state.visible ? (
          <div>
            <ul className="router-menu" onClick={this.onClick}>
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
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
