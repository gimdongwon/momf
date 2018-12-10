import React from "react";
import { Link } from "react-router-dom";
export default class History extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hi History!</h1>
        <Link to="/">home</Link>
      </React.Fragment>
    );
  }
}
