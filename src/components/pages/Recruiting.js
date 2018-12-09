import React from "react";
import { Link } from "react-router-dom";
export default class Recruiting extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hi Recruiting!</h1>
        <Link to="/">home</Link>
      </React.Fragment>
    );
  }
}
