import React from "react";
export default class History extends React.Component {
  render() {
    return (
      <section className="content-wrapper">
        <header className="contents-header">
          <h1>히스토리</h1>
        </header>
        <section className="content-box contents-life">
          <header>
            <h2>MOMF의 히스토리</h2>
          </header>
          <section className="card">
            <h3>2011</h3>
            <p>재수학원시절</p>
          </section>
          <div className="comment">
            <p>질문이 있으시다면 카카오 플러스 친구를 등록해주세요</p>
          </div>
        </section>
      </section>
    );
  }
}
