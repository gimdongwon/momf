import React, { Component, Fragment } from "react";
import "./Maincolumn.css";

export default class MainColumn extends Component {
  render() {
    return (
      <Fragment>
        <div className="Container">
          <ColumnFirst />
          <ColumnSecond />
          <ColumnThird />
        </div>
      </Fragment>
    );
  }
}

export const ColumnFirst = () => {
  return <div className="Main-Item First" />;
};
export const ColumnSecond = () => {
  return <div className="Main-Item Second" />;
};
export const ColumnThird = () => {
  return <div className="Main-Item Third" />;
};
