import React from "react";

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
            <h3>2018.12</h3>
            <p>홈페이지 개설 by 동원</p>
          </section>
          <div className="comment">
            <p>질문이 있으시다면 카카오 플러스 친구를 등록해주세요</p>
          </div>
        </section>
      </section>
    );
  }
}
