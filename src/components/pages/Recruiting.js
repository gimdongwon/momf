import React from "react";
import "./Recruiting.css";
export default class Recruiting extends React.Component {
  render() {
    return (
      <section className="content-wrapper">
        {/* 채용공고-header */}
        <header className="contents-header">
          <h1>채용공고</h1>
        </header>
        {/* content-box */}
        <section className="content-box contents-life">
          <header>
            <h2>우리는 원합니다</h2>
          </header>
          <section className="card">
            <h3>우리는 음악을 즐기길 원합니다.</h3>
            <p>
              슬픔을 기쁨으로 만들고, 기쁨을 슬픔으로 만들고, 절망하는
              사람들에게 용기를 조고 자신감을 겸손하게 만들고 질투를 완화하는 것
              중 세상의 어떤 것도 음악만한 것이 없다.
            </p>
            <h3>어떤 음악이든, 악기이든 환영합니다!</h3>
            <p>
              저희는 가요 Cover 및 자작곡 작곡 등을 할것이며 보컬과, 작사, 기타
              키보드, 등등 자신이 다룰 수 있는 악기가 있다면 과감히
              지원해주세요!
            </p>
            <h3>혹시 음악을 못하신다면 스텝으로 참여도 가능합니다!</h3>
            <p>
              Vlog 촬영 및 영상촬영, 편집부분을 담당할 수 있으며 좋은 기획과
              의도를 가진 활동을 통해 경험을 쌓을 수 있습니다.
            </p>
            <p>자유 스텝 부분도 참여 가능합니다</p>
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
          </section>
          <div className="comment">
            <p>질문이 있으시다면 카카오 플러스 친구를 등록해주세요</p>
          </div>
        </section>

        <section clas />
      </section>
    );
  }
}
