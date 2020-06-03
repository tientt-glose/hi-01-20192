import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import BannerSVGAnim from './BannerSVGAnim'

class Banner extends Component {
  render() {
    return (
      <div className="banner-wrapper">
        <QueueAnim className="banner-title-wrapper" type="right">
          <div key="line" className="title-line-wrapper">
            <div
              className="title-line"
              style={{ transform: 'translateX(-64px)' }}
            />
          </div>
          <h1 key="h1">Xin chào! Chào mừng bạn quay trở lại</h1>
          <p key="content">
            Chức năng sử dụng gần đây...
          </p>
          <div key="button" className="button-wrapper">
          <Link to={`/construction-add`}>
          {/* <a href="http://preview.pro.ant.design" target="_blank" rel="noopener noreferrer"> */}
            <Button type="primary">
              Tạo công trình
            </Button>
          </Link>
          <Button style={{ margin: '0 16px' }} type="primary" ghost>
            Kết nối drone
          </Button>
        </div>
        </QueueAnim>
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
        </TweenOne>
      </div>
    );
  }
}

export default Banner;