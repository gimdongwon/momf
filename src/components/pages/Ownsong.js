import React from "react";
import KakaoFriend from "./kakaoFriend";
import "../lib/Ownsong.css";
export default class Ownsong extends React.Component {
  render() {
    return (
      <section className="content-wrapper">
        <header className="contents-header">
          <h1>자작곡</h1>
        </header>
        <div className="content-box_wrap">
          <section className="content-box contents-life">
            <header>
              <h2>MOMF의 자작곡</h2>
            </header>
            <section className="card">
              <h3>2017</h3>
              <iframe
                title="I'm not the only one"
                src="https://player.vimeo.com/video/346600003"
                width="540"
                height="548"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
              <p>
                <a href="https://vimeo.com/346600003">
                  I&#039;m not the only one
                </a>
                <a href="https://vimeo.com">Vimeo</a>.
              </p>
              <hr />
              <iframe
                title="Melt"
                src="https://player.vimeo.com/video/346600600"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="melts"
              />
              <p>
                <a href="https://vimeo.com/346600600">녹아요</a>
              </p>
            </section>
            <KakaoFriend />
          </section>
        </div>
      </section>
    );
  }
}
