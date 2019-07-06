import React from "react";
import KakaoFriend from "./kakaoFriend";

import "../lib/People.css";

export default class People extends React.Component {
  render() {
    return (
      <section className="content-wrapper">
        <header className="contents-header">
          <h1>사람들</h1>
        </header>
        <section className="content-box contents-life">
          <header>
            <h2>MOMF의 사람들</h2>
          </header>
          <section className="card">
            <h3>2011</h3>
            <div className="profile_wrap">
              <div className="profile">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fbtestdw.appspot.com/o/profile%2Fdongwon_profile.JPG?alt=media&token=6dc67540-59b2-4507-b9ba-612dd19a4167"
                  alt="dongwon_profile"
                  width="240px"
                  height="240px"
                />
                <p>kim Dongwon</p>
                <p>참여 횟수 : 4회(2011,2013, 2015, 2017)</p>
                <p>Music is Inevitable!</p>
              </div>
              <div className="profile">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fbtestdw.appspot.com/o/profile%2Fman.jpg?alt=media&token=2fc471b8-4674-4ec8-b23b-4b379d4a03a6"
                  alt="heejun_profile"
                  width="240px"
                  height="240px"
                />
                <p>kim Heejun</p>
                <p>참여 횟수 : 1회(2011)</p>
                <p>2cm</p>
              </div>
            </div>
            <h3>2013</h3>
            <div className="profile_wrap">
              <div className="profile" />
              <div className="profile" />
            </div>
            <div className="profile_wrap">
              <div className="profile" />
              <div className="profile" />
            </div>
            <div className="profile_wrap">
              <div className="profile" />
            </div>
          </section>
          <KakaoFriend />
        </section>
      </section>
    );
  }
}
