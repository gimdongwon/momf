import React, { Component } from "react";
import "./MainVideo.css";

export default class MainVideo extends Component {
  render() {
    return (
      <div className="media-container">
        <iframe
          src="https://player.vimeo.com/video/302375803?autoplay=1&loop=1"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          /* allow="autoplay" */
        />
      </div>
    );
  }
}
