import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Button } from 'antd';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForCreateReport from '../component/ForReport/BreadCrumbForChooseReport'

class CreateReportPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForCreateReport />

        
        
        <div className="site-card-wrapper">
          <div style={{ marginBottom: 16, textAlign: 'right' }}>
            <Button type="primary" size="large" shape="round">Tạo mẫu báo cáo mới</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreateReportPage;