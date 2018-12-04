import React, { Fragment } from "react";
import "./Mainitem.css";
const MainItem = props => {
  const item = props.item;
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
};

export default MainItem;
