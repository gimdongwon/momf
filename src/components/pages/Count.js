import React from "react";
import KakaoFriend from "./kakaoFriend";
import "./Recruiting.css";

export default class Count extends React.Component {
  state = {
    time: new Date().getSeconds(),
    minute: new Date().getMinutes(),
    hour: new Date().getHours(),
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  };
  method = () => {
    let time = new Date();
    this.setState({
      time: time.getSeconds(),
      minute: time.getMinutes(),
      hour: time.getHours(),
      day: time.getDay(),
      month: time.getMonth(),
      year: time.getFullYear()
    });
  };
  componentDidMount() {
    setInterval(this.method, 1000);
  }
  render() {
    return (
      <section className="content-wrapper">
        <header className="contents-header">
          <h1>Count</h1>
        </header>
        <section className="content-box contents-life">
          <header>
            <h2>Count</h2>
          </header>
          <section className="card">
            <h2>
              현재 시각 :{this.state.year} 년 {this.state.month} 월{" "}
              {this.state.day} 일 {this.state.hour} 시{this.state.minute} 분{" "}
              {this.state.time} 초
            </h2>
          </section>
          <KakaoFriend />
        </section>
      </section>
    );
  }
}
