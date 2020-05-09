import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Ant Design</h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                    Ant Design Pro GitHub
                  </a>
                </div>
                <div>
                  <a target="_blank " href="http://ant.design">
                    Ant Design
                  </a>
                </div>
                <div>
                  <a href="http://mobile.ant.design">Ant Design Mobile</a>
                </div>
                <div>
                  <a href="http://ng.ant.design">NG-ZORRO</a>
                  <span> - </span>
                  Ant Design of Angular
                </div>
                <div>
                  <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                    Awesome Ant Design
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Ant Design</h2>
                <div>
                  <a href="http://scaffold.ant.design">Scaffolds</a>
                  <span> - </span>
                  <span>Footer 1</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">Ant Motion</a>
                  <span> - </span>
                  <span>Footer 2</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">Axure Library</a>
                  <span> - </span>
                  <span>Footer 3</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
                  <span> - </span>
                  <span>Footer 4</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva </a>
                  <span> - </span>
                  <span> Footer 5</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-cli">dva-cli </a>
                  <span> - </span>
                  <span> Footer 6</span>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Footer 7</h2>
                <div>
                  <a href="google.com">
                    Footer 8
                  </a>
                </div>
                <div>
                  <a href="google.com">
                    Footer 9
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design-pro">
                    Footer 10
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design-pro/issues">
                    Footer 11
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://ant.design/docs/resource/work-with-us"
                  >
                    Footer 12
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  Footer 13
                </h2>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://ant.design/">Ant Design</a>
                  <span> - </span>
                  <span>Footer 14</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">AntV</a>
                  <span> - </span>
                  <span>Footer 15</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                  <span> - </span>
                  <span>Footer 16</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="bottom-bar">
          <Col lg={6} sm={24}>
            <div className="translate-button">
              <Button ghost size="small" >
                English
              </Button>
            </div>
          </Col>
          <Col lg={18} sm={24}>
            <span
              style={{
                lineHeight: '16px',
                paddingRight: 12,
                marginRight: 11,
                borderRight: '1px solid rgba(255, 255, 255, 0.55)',
              }}
            >
              <a
                href="https://docs.alipay.com/policies/privacy/antfin"
                rel="noopener noreferrer"
                target="_blank"
              >
                Footer 17
              </a>
            </span>
            <span style={{ marginRight: 24 }}>
              <a
                href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Footer 18
              </a>
            </span>
            <span style={{ marginRight: 12 }}>Footer 19</span>
            <span style={{ marginRight: 12 }}>Footer 20</span>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;