import React, { Component } from 'react';
import { Divider, Row, Col, Statistic, Collapse, Input } from 'antd';


import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForModuleMainPage from '../component/ForModuleMainPage/BreadCrumbForModuleMainPage'
import { Link } from 'react-router-dom';

const { Panel } = Collapse;
const { Search } = Input;
class ModuleMainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForModuleMainPage />
        <div className="site-module-wrapper">
          <Divider>Thông tin kiểm soát</Divider>
          <Row gutter={16}>
            <Col span={8}>
              <Link to={`/construction-list`}><Statistic title="Số công trình đang theo dõi" value={50} suffix="/ 130" valueStyle={{ color: '#40a9ff' }} /></Link>
            </Col>
            <Col span={8}>
              <Link to={`/construction-list`}><Statistic title="Số công trình đang quá tiến độ" value={20} suffix="/ 130" valueStyle={{ color: '#cf1322' }} /></Link>
            </Col>
            <Col span={8}>
              <Link to={`/construction-list`}><Statistic title="Số công trình hoàn thành" value={60} suffix="/ 130" valueStyle={{ color: '#3f8600' }} /></Link>
            </Col>
          </Row>
          <Divider>Bảng chức năng</Divider>
          <Search placeholder="Nhập chức năng cần tìm kiếm" enterButton />
          <div style={{ marginTop: 16 }}>
            <Collapse defaultActiveKey={['1']} >
              <Panel header="Chức năng sử dụng gần đây" key="1">
                <p><Link to={`/construction-add`}>Tạo công trình</Link></p>
                <p><Link to={`/create-report`}>Tạo báo cáo kiểm tra định kì</Link></p>
                <p><Link to={`/construction-list`}>Xem danh sách công trình</Link></p>
              </Panel>
              <Panel header="Nhóm chức năng thiết lập tiến độ" key="2">
                <p><Link to={`/construction-add`}>Tạo công trình</Link></p>
                <p><Link to={`/construction-list`}>Thiết lập tiến độ công trình</Link></p>
              </Panel>
              <Panel header="Nhóm chức năng thống kê tiến độ" key="3">
                <p><Link to={`/construction-list`}>Xem thống kê tiến độ một công trình</Link></p>
              </Panel>
              <Panel header="Nhóm chức năng tạo và kết xuất báo cáo" key="4">
                <p><Link to={`/create-report-template`}>Tạo mẫu báo cáo</Link></p>
                <p><Link to={`/choose-report`}>Tạo báo cáo kết quả tiến độ theo mẫu</Link></p>
                <p><Link to={`/create-report`}>Tạo báo cáo kiểm tra định kì</Link></p>
                <p><Link to={`/create-report-2`}>Tạo báo cáo tiến độ hàng ngày</Link></p>
                <p><Link to={`/create-report`}>Tạo báo cáo dọn dẹp hành lang tuyến</Link></p>
                <p><Link to={`/create-report`}>Tạo báo cáo sửa chữa bộ phận</Link></p>
                <p><Link to={`/create-report`}>Tạo báo cáo kiểm tra chức năng</Link></p>
                <p><Link to={`/create-report`}>Tạo báo cáo lắp đặt thành phần mới</Link></p>
                {/* <p>Tạo mẫu báo cáo mới</p> */}
              </Panel>
            </Collapse>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ModuleMainPage;