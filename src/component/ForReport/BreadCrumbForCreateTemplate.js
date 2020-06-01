import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import { HomeOutlined, ProjectOutlined, UnorderedListOutlined } from '@ant-design/icons';
// css in App.css

class BreadCrumbForCreateTemplate extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={`/`}>
              <HomeOutlined />
              <span style={{ color: '#40a9ff' }}> Home </span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/module`}>
              <ProjectOutlined />
              <span style={{ color: '#40a9ff' }}> Giám sát thi công </span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/choose-report`}>
              <UnorderedListOutlined />
              <span style={{ color: '#40a9ff' }}> Tạo báo cáo kết quả tiến độ theo mẫu </span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item> <UnorderedListOutlined /> Tạo mẫu báo cáo </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumbForCreateTemplate;