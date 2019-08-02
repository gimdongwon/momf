import React from "react";

const pointer = {
  cursor: "pointer"
};

function KakaoFriend() {
  return (
    <div className="comment">
      <p>질문이 있으시다면 카카오 플러스 친구를 등록해주세요</p>
      <a href="javascript:void addPlusFriend()" sylte={pointer}>
        <img
          alt="add Friend"
          src="https://developers.kakao.com/assets/img/about/logos/plusfriend/friendadd_small_yellow_rect.png"
        />
      </a>
    </div>
  );
}

export default KakaoFriend;
