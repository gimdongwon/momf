import React, { Component } from "react";
import "./MainVideo.css";

export default class MainVideo extends Component {
  render() {
    return (
      <div className="media-container">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/momf-b4498.appspot.com/o/MMF%20intro(optimization).mp4?alt=media&token=989fee87-fb74-4a50-8b95-fbb4ca175845"
          autoPlay
          loop
        />
      </div>
    );
  }
}

// loop 추가
// testing..
