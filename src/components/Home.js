import React, { Component, Fragment } from "react";
import MainVideo from "./main/MainVideo";
import MainColumn from "./main/Maincolumn";
import Footer from "./main/Footer";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainVideo />
        <MainColumn />
        <Footer />
      </Fragment>
    );
  }
}
