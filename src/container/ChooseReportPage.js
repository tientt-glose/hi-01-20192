import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Card, Col, Row, Pagination, Button, Input, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForChooseReport from '../component/ForReport/BreadCrumbForChooseReport'

const { Search } = Input;

class ChooseReportPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForChooseReport />
        <div className="site-card-wrapper">
          <Divider>Lựa chọn mẫu báo cáo để lập báo cáo</Divider>
          <Search placeholder="Nhập tên mẫu báo cáo để tìm kiếm" enterButton />
          <div style={{ marginTop: 16, marginBottom: 16, textAlign: 'right' }}>
            <Link to={`/create-report-template`}>
              <Button type="primary" size="large" shape="round" icon={<PlusOutlined />}>Tạo mẫu báo cáo</Button>
            </Link>
          </div>

          <Row gutter={16}>
            <Col span={8}>
              <Link to={`/create-report`}>
                <Card hoverable
                  title="Báo cáo kiểm tra định kỳ" bordered={false}
                  cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
                >
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to={`/create-report`}>
                <Card hoverable
                  title="Báo cáo tiến độ hàng ngày" bordered={false}
                  cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
                >
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to={`/create-report`}>
                <Card hoverable
                  title="Báo cáo dọn dẹp hành lang tuyến" bordered={false}
                  cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
                >
                </Card>
              </Link>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Link to={`/create-report`}>
                <Card hoverable
                  title="Báo cáo sửa chữa bộ phận" bordered={false}
                  cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
                >
                </Card>
              </Link>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Link to={`/create-report`}>
                <Card hoverable
                  title="Báo cáo kiểm tra chức năng" bordered={false}
                  cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
                >
                </Card>
              </Link>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Link to={`/create-report`}>
                <Card hoverable
                  title="Báo cáo lắp đặt thành phần mới" bordered={false}
                  cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
                >
                </Card>
              </Link>
            </Col>
          </Row>
          
          <Pagination style={{ marginTop: 16, textAlign: 'center' }} defaultCurrent={1} total={50} />
        <Footer />
        </div>
      </div>
    );
  }
}

export default ChooseReportPage;