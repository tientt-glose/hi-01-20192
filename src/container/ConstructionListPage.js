import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Pagination, Button } from 'antd';
import { EnvironmentOutlined, FieldTimeOutlined, TeamOutlined, PlusOutlined } from '@ant-design/icons';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForConstructionList from '../component/ForConstructionList/BreadCrumbForConstructionList'

class ConstructionListPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForConstructionList />
        <div className="site-card-wrapper">
          <div style={{ marginBottom: 16, textAlign: 'right' }}>
            <Link to={`/construction-add`}>
              <Button type="primary" size="large" shape="round" icon={<PlusOutlined />}>Tạo công trình</Button>
            </Link>
          </div>
          <Row gutter={16}>
            <Col span={8}>
              <Link to={`/gantt`}>
                <Card hoverable
                  title="Sửa tụ điện cột F25" bordered={false}
                  cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
                >

                  <p><EnvironmentOutlined /> 458 Minh Khai, Vĩnh Tuy, Hà Nội</p>
                  <p><FieldTimeOutlined /> 16/04/2020 - 01/07/2020</p>
                  <p><TeamOutlined /> 15 kỹ sư </p>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Card hoverable
                title="Dọn dẹp hành lang tuyến cột A2" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
                <p><EnvironmentOutlined /> Thư viện Tạ Quang Bửu</p>
                <p><FieldTimeOutlined /> 08/03/2020 - NA</p>
                <p><TeamOutlined /> 20 kỹ sư</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable
                title="Công trình C" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
                <p><EnvironmentOutlined /> Địa chỉ</p>
                <p><FieldTimeOutlined /> Ngày khởi công - Ngày hoàn tất</p>
                <p><TeamOutlined /> Số kỹ sư tham gia</p>
              </Card>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Card hoverable
                title="Công trình D" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
                <p><EnvironmentOutlined /> Địa chỉ</p>
                <p><FieldTimeOutlined /> Ngày khởi công - Ngày hoàn tất</p>
                <p><TeamOutlined /> Số kỹ sư tham gia</p>
              </Card>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Card hoverable
                title="Công trình E" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
                <p><EnvironmentOutlined /> Địa chỉ</p>
                <p><FieldTimeOutlined /> Ngày khởi công - Ngày hoàn tất</p>
                <p><TeamOutlined /> Số kỹ sư tham gia</p>
              </Card>
            </Col>
            <Col span={8} style={{ marginTop: 16 }}>
              <Card hoverable
                title="Công trình F" bordered={false}
                cover={<img alt="example" src="https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg" />}
              >
                <p><EnvironmentOutlined /> Địa chỉ</p>
                <p><FieldTimeOutlined /> Ngày khởi công - Ngày hoàn tất</p>
                <p><TeamOutlined /> Số kỹ sư tham gia</p>
              </Card>
            </Col>
          </Row>
          <Pagination style={{ marginTop: 16, textAlign: 'center' }} defaultCurrent={1} total={50} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ConstructionListPage;