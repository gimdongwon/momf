import React, { Component, Fragment } from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./Maincolumn.css";

// 재사용 컴포넌트 이용

export default class MainColumn extends Component {
  state = {
    list: [
      {
        id: 1,
        title: "인재채용",
        summary:
          "지금이 당신의 음악을 사랑하는 마음을 보여줄 때 입니다.함께 합시다!"
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
      { id: 5, title: "언론보도" },
      { id: 6, title: "역사" },
      { id: 7, title: "역대 자작곡들" },
      { id: 8, title: "character" },
      { id: 9, title: "공지" }
    ]
  };
  render() {
    const list = this.state.list;
    return (
      <div className="main-container">
        {[1, 2, 3].map(item => (
          <MainItems list={list} id={item} />
        ))}
      </div>
    );
  }
}

// component 나누기
class MainItems extends Component {
  render() {
    const list = this.props.list;
    return (
      <div className="main-column">
        {this.props.id === 1 ? (
          <Fragment>
            {list
              .filter(item => item.id < 4)
              .map(item => (
                <MainItem item={item} />
              ))}
          </Fragment>
        ) : this.props.id === 2 ? (
          <Fragment>
            {list
              .filter(item => item.id > 3 && item.id < 7)
              .map(item => (
                <MainItem item={item} />
              ))}
          </Fragment>
        ) : (
          <Fragment>
            {list
              .filter(item => item.id > 6)
              .map(item => (
                <MainItem item={item} />
              ))}
          </Fragment>
        )}
      </div>
    );
  }
}

class MainItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="main-item">
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
        {item.id === 1 ? (
          <Fragment>
            <table>
              <caption>음악 모집부분</caption>
              <tbody>
                <tr>
                  <th>기타부분</th>
                  <td>가요 cover 및 자작곡 작곡</td>
                </tr>
                <tr>
                  <th>보컬부분</th>
                  <td>작사 및 보컬</td>
                </tr>
                <tr>
                  <th>자유 악기 부분</th>
                  <td>그외 자신이 다룰 수 있는 악기 가능</td>
                </tr>
              </tbody>
            </table>
            <table>
              <caption>스텝 모집부분</caption>
              <tbody>
                <tr>
                  <th>촬영 부분</th>
                  <td>Vlod 및 단체 영상 촬영</td>
                </tr>
                <tr>
                  <th>편집 부분</th>
                  <td>촬영 이후 편집 담당</td>
                </tr>
                <tr>
                  <th>자유 스텝 부분</th>
                  <td>포스터, 안내장, 케릭터 디자인 등</td>
                </tr>
              </tbody>
            </table>
            <div className="btn-table">
              <a href="../pages/Recruiting" className="btn">
                지원하기
              </a>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export { MainItems, MainItem };
