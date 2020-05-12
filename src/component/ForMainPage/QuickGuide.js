import React, { Component } from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

class QuickGuide extends Component {
  render() {
    return (
      <div className="home-page page2">
        <div className="home-page-wrapper">
          <div className="title-line-wrapper page2-line">
            <div className="title-line" />
          </div>
          <h2>Hãy dùng <span>EFDc</span> để dễ dàng điều khiển drone hơn!</h2>
          <OverPack>
            <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
              <p key="p" className="page-content">
                EFD console là app giúp bạn điều khiển drone trên hệ điều hành android và iOS
              </p>
              {/* <div key="code1" className="home-code">
                <div>
                  $ <span>git clone</span> git@github.com:ant-design/ant-design-pro.git --depth=1
                </div>
                <div>$ cd ant-design-pro</div>
                <div>$ npm install</div>
                <div>
                  $ npm start then<span> </span>
                  <span className="home-code-comment">
                    open http://localhost:8000 in your web browser
                  </span>
                </div>
              </div> */}
              {/* <div key="button" style={{ marginTop: 88 }}> */}
              <div key="button">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Button type="primary">ANDROID</Button>
                </a>
              </div>
              <div key="button" style={{ marginTop: 10 }}>
                <a href="https://www.apple.com/ios/app-store" target="_blank" rel="noopener noreferrer">
                  <Button type="primary">IOS</Button>
                </a>
              </div>
              <p key="p2" className="page-content">
                Cần sự trợ giúp? Hãy thử đọc qua
                <a href="google.com"> tài liệu hướng dẫn sử dụng </a>
                và
                <a href="google.com"> FAQ </a>， bạn có thể liên hệ trực tiếp với đội ngũ hỗ trợ kỹ thuật
                <a href="mailto:tiennguyenbka198@gmail.com"> tại đây </a>.
              </p>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default QuickGuide;