import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import { HomeOutlined, ProjectOutlined, AppstoreAddOutlined } from '@ant-design/icons';
// css in App.css

class BreadCrumbForConstructionAdd extends Component {
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
            <Link to={`/construction-list`}>
              <ProjectOutlined />
              <span style={{ color: '#40a9ff' }}> Xem danh sách công trình </span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item> <AppstoreAddOutlined /> Tạo công trình </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumbForConstructionAdd;