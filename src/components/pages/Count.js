import React from "react";
import KakaoFriend from "./kakaoFriend";
import "./Recruiting.css";
import "../lib/Count.css";

export default class Count extends React.Component {
  state = {
    time: null,
    minutes: null,
    hours: null,
    days: null,
    seconds: null,
    gap: 1801,
    timerFinish: false
  };
  repeat = () => {
    let timer = setInterval(() => {
      this.method();
      if (this.state.gap < 1800) {
        console.log("clear");
        clearInterval(timer);
        this.setState({ timerFinish: true });
      }
    }, 1000);
  };

  method = async () => {
    const dDay = await new Date("2019/10/3");
    dDay.setHours(16);

    // test
    // const dDay = await new Date("2019/9/2");
    // dDay.setHours(12);
    // dDay.setMinutes(52);

    let now = await new Date();
    let gap = dDay - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60 - 24 * days);
    let minutes = Math.floor(gap / 1000 / 60 - 24 * 60 * days - 60 * hours);
    let seconds = Math.floor(
      gap / 1000 - 24 * 60 * 60 * days - 60 * 60 * hours - 60 * minutes
    );
    this.setState({
      days,
      hours,
      minutes,
      seconds,
      gap
    });
  };
  componentDidMount() {
    this.repeat();
  }
  render() {
    return (
      <section className="content-wrapper">
        <header className="contents-header">
          <h1>Count</h1>
        </header>
        <div className="content-box_wrap">
          <section className="content-box contents-life">
            <header>
              <h2>Count</h2>
            </header>
            <section className="card">
              <div className="card_title">
                <p>
                  MOMF Time &nbsp;
                  <span className="accent">Is Coming.</span>
                </p>
              </div>
              {this.state.timerFinish ? (
                <>
                  <h1 className="backTitle">
                    MOMF is started!{" "}
                    <span role="img" aria-label="smile">
                      😍🎉🎸
                    </span>
                  </h1>
                  <div className="poster_wrap">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/momf-b4498.appspot.com/o/poster_first.jpg?alt=media&token=216ee96a-5667-4abf-8fac-a5abb454b6ed"
                      alt="back_poster"
                    />
                  </div>
                </>
              ) : (
                <div className="time_wrap">
                  <div className="wrap">
                    <div className="days value">{this.state.days}</div>
                    <div className="days_title">days</div>
                  </div>
                  <div className="wrap">
                    <div className="hours value">{this.state.hours}</div>
                    <div className="hours_title">hours</div>
                  </div>
                  <div className="wrap">
                    <div className="minutes value">{this.state.minutes}</div>
                    <div className="minutes_title">minutes</div>
                  </div>
                  <div className="wrap">
                    <div className="seconds value accent">
                      {this.state.seconds}
                    </div>
                    <div className="seconds_title">seconds</div>
                  </div>
                </div>
              )}
            </section>
            <KakaoFriend />
          </section>
        </div>
      </section>
    );
  }
}
