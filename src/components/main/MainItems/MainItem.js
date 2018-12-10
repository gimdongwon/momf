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
                <td>Vlog 및 단체 영상 촬영</td>
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
            <a href="../../Recruiting" className="btn">
              지원하기
            </a>
          </div>
        </Fragment>
      ) : item.id === 2 ? (
        <Fragment>
          <p>
            2년에 한번씩 개최되며 주위에 있는 음악을 좋아하는 사람들을 초대하여
            각자의 음악을 보여줍니다.
          </p>
          <p>
            그 이후 팀을 맺어 cover곡 한곡과 자작곡 한곡을 연습을 하여 약속한
            시간에 다같이 공연을 합니다.
          </p>
        </Fragment>
      ) : item.id === 3 || item.id === 4 || item.id === 8 ? (
        <img
          src="http://image.chosun.com/sitedata/image/201610/21/2016102101259_0.jpg"
          width="320px"
          alt="character"
        />
      ) : item.id === 5 ? (
        <Fragment>
          <h2>제 1회</h2>
          <p>
            August of 2011 재수시절 공원에 기타 하나 짊어지고 올라와서 고등학교
            때 같이 기타애기했던 친구와 3시간 정도를 연주하다 내려온 기억
          </p>
        </Fragment>
      ) : item.id === 6 ? (
        <Fragment>
          <ul>김동원</ul>
          <ul>김민지</ul>
          <ul>박창우</ul>
        </Fragment>
      ) : item.id === 7 ? (
        <Fragment>
          <ul>호빵맨</ul>
          <ul>안생겨요</ul>
          <ul>녹아요</ul>
          <ul>24.5</ul>
        </Fragment>
      ) : (
        <h2>홈페이지 개설!!</h2>
      )}
    </div>
  );
};

export default MainItem;
