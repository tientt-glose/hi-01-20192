import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import { HomeOutlined, ProjectOutlined, UnorderedListOutlined, AuditOutlined } from '@ant-design/icons';
// css in App.css

class BreadCrumbForChooseReport extends Component {
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
          <Breadcrumb.Item> <AuditOutlined /> Tạo báo cáo mới </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumbForChooseReport;