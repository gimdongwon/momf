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
        <section className="content-box contents-life">
          <header>
            <h2>MOMF의 자작곡</h2>
          </header>
          <section className="card">
            <h3>2017</h3>
            <iframe
              src="https://player.vimeo.com/video/346600003"
              width="540"
              height="548"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            />
            <p>
              <a href="https://vimeo.com/346600003">
                I&#039;m not the only one
              </a>
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
            <hr />
            <iframe
              src="https://player.vimeo.com/video/346600600"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
              className="melts"
            />
            <p>
              <a href="https://vimeo.com/346600600">녹아요</a>
            </p>
          </section>
          <KakaoFriend />
        </section>
      </section>
    );
  }
}
