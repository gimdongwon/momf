import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MainItem from "./MainItems/MainItem";
import "./Maincolumn.css";

// 재사용 컴포넌트 이용

export default class MainColumn extends Component {
  state = {
    list: [
      {
        id: 1,
        title: "인재채용",
        summary: `지금이 당신의 음악을 사랑하는 마음을 보여줄 때 입니다.\n\n함께 합시다!`
      },
      {
        id: 2,
        title: "MOMF란?",
        summary: `Montmardre Music Festiver 
으로써 2년에 한번씩 열리며 좋은 
사람들과 음악을 나누는 페스티벌입니다`
      },
      { id: 3, title: "character" },
      { id: 4, title: "character" },
      { id: 5, title: "히스토리" },
      { id: 6, title: "people" },
      { id: 7, title: "역대 자작곡들" },
      { id: 8, title: "character" },
      { id: 9, title: "공지사항" }
    ]
  };

  render() {
    const list = this.state.list;
    return (
      <div className="main-container">
        {[1, 2, 3].map((item, key) => (
          <MainItems list={list} id={item} key={key} />
        ))}
      </div>
    );
  }
}

// component 나누기
const MainItems = props => {
  const list = props.list;
  const id = props.id;
  return (
    <div className="main-column">
      {id === 1 ? (
        <Fragment>
          {list
            .filter(item => item.id < 4)
            .map((item, key) => (
              <MainItem item={item} key={key} />
            ))}
        </Fragment>
      ) : id === 2 ? (
        <Fragment>
          {list
            .filter(item => item.id > 3 && item.id < 7)
            .map((item, key) => (
              <MainItem item={item} key={key} />
            ))}
        </Fragment>
      ) : (
        <Fragment>
          {list
            .filter(item => item.id > 6)
            .map((item, key) => (
              <MainItem item={item} key={key} />
            ))}
        </Fragment>
      )}
    </div>
  );
};

export { MainItems };
