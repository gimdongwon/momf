import React from "react";
import { Link } from "react-router-dom";
export default class Notice extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hi Notice!</h1>
        <Link to="/">home</Link>
      </React.Fragment>
    );
  }
}
