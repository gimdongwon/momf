import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-whole">
        <div className="footer">
          <div className="footer-wrap">
            <img
              src="http://mblogthumb2.phinf.naver.net/MjAxNzA2MzBfMjAz/MDAxNDk4ODA5NDIxMjU3.pzMutJ85u-KfAyzuYhwYlsL4xlTxWJOmHcnazCm9W6Ag.-RfqcrzdtzmYc6PXHpnsYgstjG9CU8dVW0KwikpkRDIg.JPEG.ticketpower/image_4779620211498809361902.jpg?type=w800"
              alt="park"
              width="50px"
              height="50px"
            />
            <div className="footer-item">
              <address>
                주소: 서울특별시 서초구 서초동 몽마르뜨 공원
                <br />
                <strong>전화번호 </strong>: 010 - 8871 - 6296
              </address>
              <p className="copyright">
                &copy <strong>MOMF</strong> All right reserve
              </p>
            </div>
          </div>
          <div className="siteMap">제휴문의, 스폰서</div>
        </div>
      </div>
    );
  }
}
