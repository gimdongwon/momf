import React, { Component } from "react";
import KakaoFriend from "./kakaoFriend";
import PeopleData from "./peopleData";
import PeopleItem from "./PeopleItem";

import "../lib/People.css";

export default class People extends Component {
  state = {
    ...PeopleData
  };
  render() {
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
                {this.state.first.map((item, index) => {
                  return <PeopleItem item={item} index={index} key={index} />;
                })}
              </div>
              <h3>2013</h3>
              {[this.state.second1, this.state.second2].map((items, idx) => {
                return (
                  <div className="profile_wrap" key={idx}>
                    {items.map((item, index) => {
                      return (
                        <PeopleItem item={item} index={index} key={index} />
                      );
                    })}
                  </div>
                );
              })}
              <h3>2015</h3>
              {[
                this.state.third1,
                this.state.third2,
                this.state.third3
              ].map((items, idx) => {
                return (
                  <div className="profile_wrap" key={idx}>
                    {items.map((item, index) => {
                      return (
                        <PeopleItem item={item} index={index} key={index} />
                      );
                    })}
                  </div>
                );
              })}
              <h3>2017</h3>
              {[
                this.state.fourth1,
                this.state.fourth2,
                this.state.fourth3
              ].map((items, idx) => {
                return (
                  <div className="profile_wrap" key={idx}>
                    {items.map((item, index) => {
                      return (
                        <PeopleItem item={item} index={index} key={index} />
                      );
                    })}
                  </div>
                );
              })}
              <h3>2019</h3>
              {[this.state.fiveth1].map((items, idx) => {
                return (
                  <div className="profile_wrap" key={idx}>
                    {items.map((item, index) => {
                      return (
                        <PeopleItem item={item} index={index} key={index} />
                      );
                    })}
                  </div>
                );
              })}
            </section>
            <KakaoFriend />
          </section>
        </div>
      </section>
    );
  }
}
