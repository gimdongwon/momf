import React, { Component } from "react";
import "./MainVideo.css";

export default class MainVideo extends Component {
  render() {
    return (
      <div className="media-container">
        <iframe
          src="https://www.youtube.com/embed/rEWj2esfdrg?autoplay=1&loop=1"
          title="happyVideo"
        />
      </div>
    );
  }
}

// allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
