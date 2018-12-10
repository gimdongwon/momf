import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

export default class Hedaer extends Component {
  onClick = () => {
    console.log("Hi onClick");
  };
  MouseOver = () => {
    console.log("MouseOver");
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.onClick} onMouseOver={this.MouseOver}>
          Momf
        </button>
        <div className="router-menu">
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
          <ul>
            <Link to="/">Home</Link>
          </ul>
        </div>
      </Fragment>
    );
  }
}
