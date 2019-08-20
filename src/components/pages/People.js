import React, { Component } from "react";
import KakaoFriend from "./kakaoFriend";
import PeopleData from "./peopleData";

import "../lib/People.css";

export default class People extends Component {
  state = {
    ...PeopleData
  };
  render() {
    console.log(this.state);
    return (
      <section className="content-wrapper">
        <header className="contents-header">
          <h1>사람들</h1>
        </header>
        <div className="content-box_wrap">
          <section className="content-box contents-life">
            <header>
              <h2>MOMF의 사람들</h2>
            </header>
            <section className="card">
              <h3>2011</h3>
              <div className="profile_wrap">
                {this.state.first.map(item => {
                  return (
                    <div className="profile" key={item.name}>
                      <img
                        src={item.img}
                        alt="img_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
              <h3>2013</h3>
              <div className="profile_wrap">
                {this.state.second1.map((item, index) => {
                  return (
                    <div className="profile" key={index}>
                      <img
                        src={item.img}
                        alt="anomymous_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
              <div className="profile_wrap">
                {this.state.second2.map((item, index) => {
                  return (
                    <div className="profile" key={index}>
                      <img
                        src={item.img}
                        alt="anomymous_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
              <h3>2015</h3>
              <div className="profile_wrap">
                {this.state.third1.map((item, index) => {
                  return (
                    <div className="profile" key={index}>
                      <img
                        src={item.img}
                        alt="anomymous_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
              <div className="profile_wrap">
                {this.state.third2.map((item, index) => {
                  return (
                    <div className="profile" key={index}>
                      <img
                        src={item.img}
                        alt="anomymous_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
              <div className="profile_wrap">
                {this.state.third3.map((item, index) => {
                  return (
                    <div className="profile" key={index}>
                      <img
                        src={item.img}
                        alt="anomymous_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
              <h3>2017</h3>
              <div className="profile_wrap">
                {this.state.fourth1.map((item, index) => {
                  return (
                    <div className="profile" key={index}>
                      <img
                        src={item.img}
                        alt="anomymous_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
              <div className="profile_wrap">
                {this.state.fourth2.map((item, index) => {
                  return (
                    <div className="profile" key={index}>
                      <img
                        src={item.img}
                        alt="anomymous_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
              <div className="profile_wrap">
                {this.state.fourth3.map((item, index) => {
                  return (
                    <div className="profile" key={index}>
                      <img
                        src={item.img}
                        alt="anomymous_profile"
                        width="240px"
                        height="240px"
                      />
                      <p>{item.name}</p>
                      <p>{item.participation}</p>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </div>
            </section>
            <KakaoFriend />
          </section>
        </div>
      </section>
    );
  }
}
