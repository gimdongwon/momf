import React, { Fragment } from "react";
import "./Mainitem.css";

const MainItem = props => {
  const item = props.item;
  return (
    <div className="main-item">
      <h2>{item.title}</h2>
      <p>{item.summary}</p>
      {item.id === 1 ? (
        // 컴포넌트 재사용으로 바꾸어 주자 새로운 컴포넌트로 돌려쓰기
        <Fragment>
          <table>
            <caption>음악 모집부분</caption>
            <tbody>
              <tr className="tr">
                <th>기타부분</th>
                <td>가요 cover 및 자작곡 작곡</td>
              </tr>
              <tr className="tr">
                <th>보컬부분</th>
                <td>작사 및 보컬</td>
              </tr>
              <tr className="tr">
                <th>자유 악기 부분</th>
                <td>그외 자신이 다룰 수 있는 악기 가능</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>스텝 모집부분</caption>
            <tbody>
              <tr className="tr">
                <th>촬영 부분</th>
                <td>Vlog 및 단체 영상 촬영</td>
              </tr>
              <tr className="tr">
                <th>편집 부분</th>
                <td>촬영 이후 편집 담당</td>
              </tr>
              <tr className="tr">
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
          width="100%"
          alt="character"
        />
      ) : item.id === 5 ? (
        <Fragment>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fbtestdw.appspot.com/o/2011_2.jpg?alt=media&token=24767cab-8669-44ac-b762-cf41db380b4c"
            alt="2017_3"
            className="Item_img"
            width="100%"
          />
          <p>
            선조들은 말하셨지 미래를 알고 싶거든 과거부터 알고 오너라 모든 것의
            답은 과거에 있느니라
          </p>
          <div className="btn-table">
            <a href="../../History" className="btn">
              역사보기
            </a>
          </div>
        </Fragment>
      ) : item.id === 6 ? (
        <Fragment>
          <p>음악을 사랑한 사람들.. 우아하군..</p>
          <div className="btn-table">
            <a href="../../People" className="btn">
              역대 참가 사람들 보기
            </a>
          </div>
        </Fragment>
      ) : item.id === 7 ? (
        <Fragment>
          <p>여지껏 무슨 일이 있었던거야..??</p>
          <div className="btn-table">
            <a href="../../Ownsong" className="btn">
              자작곡 보기
            </a>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="notice_img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/momf-b4498.appspot.com/o/poster_first.jpg?alt=media&token=216ee96a-5667-4abf-8fac-a5abb454b6ed"
              alt="poster_first"
            />
          </div>
          <div className="btn-table">
            <a href="../../Notice" className="btn">
              공지사항
            </a>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default MainItem;
