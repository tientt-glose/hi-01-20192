import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import { HomeOutlined, ProjectOutlined } from '@ant-design/icons';
// css in App.css

class BreadCrumbForGantt extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={`/`}>
              <HomeOutlined />
              <span style={{color: '#40a9ff'}}> Home </span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/`}> 
              <ProjectOutlined />
              <span style={{color: '#40a9ff'}}> Xem danh sách công trình </span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Công trình A</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumbForGantt;