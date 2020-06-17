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
                <h2>Liên hệ</h2>
                <div>
                  <a target="_blank " href="https://www.evn.com.vn/">
                    Tập đoàn Điện lực Việt Nam
                  </a>
                </div>
                <div>
                  <a target="_blank " href="http://www.npt.com.vn/vi-VN/contact">
                    Tổng công ty Truyền tải điện Quốc gia
                  </a>
                </div>
                <div>
                  <a href="http://npc.com.vn/List/tabid/57/categoryid/85/Default.aspx">Tổng công ty Điện lực miền Bắc</a>
                </div>
                <div>
                  <a href="https://cpc.vn/vi-vn/lien-he">Tổng công ty Điện lực miền Trung</a>
                </div>
                <div>
                  <a target="_blank " href="https://www.evnspc.vn/CMS_LienHe/LienHeSPC?nothing=abc&urlf=F02-MNU201904-00000007">
                    Tổng công ty Điện lực miền Nam
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Trung tâm hỗ trợ</h2>
                <div>
                  <a href="https://drive.google.com/file/d/1qIMqj6ERryrrwQxBwHXW3D23zAgQ0_xB/view?usp=sharing">Tài liệu hướng dẫn sử dụng</a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href='https://youtu.be/GfUZD2JNqho'>Video hướng dẫn</a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/">Đăng ký khóa tập huấn</a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/">Liên hệ đội ngũ hỗ trợ giải đáp IT</a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Liên hệ phản hồi đội ngũ phát triển</h2>
                <div>
                  Nhóm phát triển
                  <span> : </span>
                  <span>HI_01</span>
                </div>
                <div>
                  Đại diện
                  <span> : </span>
                  <span>Nguyễn Mạnh Tiến</span>
                </div>
                <div>
                  Email
                  <span> : </span>
                  <span>tiennguyenbka198@gmail.com</span>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  Thông tin về project môn học
                </h2>
                <div>
                  GV hướng dẫn: 
                  <span> TS. Vũ Thị Hương Giang</span>
                </div>
                <div>
                  Nhóm: 
                  <span> 2019II_HI_01</span>
                </div>
                <div>
                  Thành viên: 
                  <p><span>Nguyễn Mạnh Tiến</span></p>
                  <p><span>Phạm Hữu Thọ</span></p>
                  <p><span>Đoàn Duy Phương</span></p>
                  <p><span>Bùi Ngọc Tú</span></p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="bottom-bar">
          <Col lg={6} sm={24}>
            <div className="translate-button">
              <Button ghost size="small" >
                Vietnamese
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
                2020
              </a>
            </span>
            <span style={{ marginRight: 24 }}>
              <a
                href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Copyright©
              </a>
            </span>
            <span style={{ marginRight: 12 }}> Version 2.0. Make with <span role="img" aria-labelledby="double_heart">💕</span> by HI01. Enjoy!</span>
            {/* <span style={{ marginRight: 12 }}>Footer 20</span> */}
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;