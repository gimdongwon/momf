import React, { Component, Fragment } from "react";
import MainVideo from "./main/MainVideo";
import MainColumn from "./main/Maincolumn";

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
