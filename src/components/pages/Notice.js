import React from "react";

import "./Notice.css";

export default class Notice extends React.Component {
  render() {
    return (
      <section className="content-wrapper">
        <header className="contents-header">
          <h1>공지사항</h1>
        </header>
        <section className="content-box contents-life">
          <header>
            <h2>MOMF의 공지사항</h2>
          </header>
          <section className="card">
            <div className="mainVideo">
              <iframe
                title="promotion"
                src="https://player.vimeo.com/video/356822253"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            <div className="mainPoster">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/momf-b4498.appspot.com/o/poster_first.jpg?alt=media&token=216ee96a-5667-4abf-8fac-a5abb454b6ed"
                alt="poster_first"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/momf-b4498.appspot.com/o/poster_second.jpg?alt=media&token=a07de9f6-1588-4752-9918-0982755446d6"
                alt="poster_second"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/momf-b4498.appspot.com/o/poster_third.jpg?alt=media&token=6d852bb0-dd5f-46a5-87af-831751275292"
                alt="poster_third"
              />
            </div>
          </section>
          <div className="comment">
            <p>질문이 있으시다면 카카오 플러스 친구를 등록해주세요</p>
          </div>
        </section>
      </section>
    );
  }
}
