import React, { Component } from "react";
import "./MainVideo.css";

export default class MainVideo extends Component {
  render() {
    return (
      <div className="media-container">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/momf-b4498.appspot.com/o/mainvideo.MP4?alt=media&token=e94226af-c58f-4fee-a373-a31534d8dc2a"
          autoPlay
          loop
        />
      </div>
    );
  }
}

// loop 추가
// testing..
