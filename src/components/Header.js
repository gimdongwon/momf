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
  state = { buttonState: "on", vislble: false, underline: false };
  onClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  MouseOver = () => {
    this.setState({ buttonState: "over" });
  };
  MouseOut = () => {
    this.setState({ buttonState: "on" });
  };
  highlight = () => {
    this.setState({
      underline: !this.state.underline
    });
  };
  outHighlight = () => {
    this.setState({
      underline: !this.state.underline
    });
  };
  render() {
    return (
      <div className="menu">
        {this.state.visible ? <div className="btnSection" /> : ""}
        <button
          className="menuBtn"
          onClick={this.onClick}
          onMouseEnter={this.MouseOver}
          onMouseLeave={this.MouseOut}
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
                <Link
                  to="/"
                  onMouseEnter={this.highlight}
                  onMouseLeave={this.outHighlight}
                  className="Link"
                >
                  홈
                </Link>
              </ul>
              <ul>
                <Link
                  to="/Recruiting"
                  onMouseEnter={this.highlight}
                  onMouseLeave={this.outHighlight}
                  className="Link"
                >
                  인재채용
                </Link>
              </ul>
              <ul>
                <Link
                  to="/History"
                  onMouseEnter={this.highlight}
                  onMouseLeave={this.outHighlight}
                  className="Link"
                >
                  역대 MOMF
                </Link>
              </ul>
              <ul>
                <Link
                  to="/People"
                  onMouseEnter={this.highlight}
                  onMouseLeave={this.outHighlight}
                  className="Link"
                >
                  사람들
                </Link>
              </ul>
              <ul>
                <Link
                  to="/Count"
                  onMouseEnter={this.highlight}
                  onMouseLeave={this.outHighlight}
                  className="Link"
                >
                  Count
                </Link>
              </ul>
              {/* <ul>
                <Link
                  to="/Notice"
                  onMouseEnter={this.highlight}
                  onMouseLeave={this.outHighlight}
                  className="Link"
                >
                  공지사항
                </Link>
              </ul> */}
              <ul>
                <Link
                  to="/Ownsong"
                  onMouseEnter={this.highlight}
                  onMouseLeave={this.outHighlight}
                  className="Link"
                >
                  자작곡
                </Link>
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
