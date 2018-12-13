import React from "react";

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
            <p>동원 희준</p>
          </section>
          <div className="comment">
            <p>질문이 있으시다면 카카오 플러스 친구를 등록해주세요</p>
          </div>
        </section>
      </section>
    );
  }
}
