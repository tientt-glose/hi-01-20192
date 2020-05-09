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
          <h2>Let’s <span>Pro</span></h2>
          <OverPack>
            <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
              <p key="p" className="page-content">
                Run this following command to quickly start a new stuff
              </p>
              <div key="code1" className="home-code">
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
              </div>
              <p key="p2" className="page-content">
                Need help? Read docs first.
                <a href="google.com"> Development problem </a>
                and
                <a href="google.com"> FAQ </a>， If you still cannot solve it, you can ask questions on GitHub
                <a href="https://github.com/ant-design/ant-design-pro/issues"> Ask a question there </a>。
              </p>
              <div key="button" style={{ marginTop: 88 }}>
                <a href="http://github.com/ant-design/ant-design-pro" target="_blank" rel="noopener noreferrer">
                  <Button type="primary">Download Pro</Button>
                </a>
              </div>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default QuickGuide;