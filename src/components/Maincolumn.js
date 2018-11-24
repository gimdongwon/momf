import React, { Component } from "react";
import "./Maincolumn.css";

export default class MainColumn extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-column">
          <div className="main-item recruiting">
            <hr />
            <h2>recruiting-item</h2>
          </div>
          <div className="main-item">
            <h2>item</h2>
          </div>
          <div className="main-item">
            <h2>character</h2>
          </div>
        </div>
        <div className="main-column">
          <div className="main-item">
            <h2>character</h2>
          </div>
          <div className="main-item">
            <h2>out-look-item</h2>
          </div>
          <div className="main-item">
            <h2>history-item</h2>
          </div>
        </div>
        <div className="main-column">
          <div className="main-item">
            <h2>font-item</h2>
          </div>
          <div className="main-item">
            <h2>character</h2>
          </div>
          <div className="main-item">
            <h2>notice-item</h2>
          </div>
        </div>
      </div>
    );
  }
}
