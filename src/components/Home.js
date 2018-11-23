import React, { Component, Fragment } from "react";
import MainVideo from "./MainVideo";
import MainColumn from "./Maincolumn";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <MainVideo />
        <MainColumn />
      </Fragment>
    );
  }
}
