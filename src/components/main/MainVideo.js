import React, { Component } from "react";
import "./MainVideo.css";

export default class MainVideo extends Component {
  render() {
    return (
      <div className="media-container">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/fbtestdw.appspot.com/o/MMF%20intro(optimized).mp4?alt=media&token=bf4650d7-b859-442c-960d-963b0e611be4"
          autoPlay
        />
      </div>
    );
  }
}

// loop 추가
// testing..
