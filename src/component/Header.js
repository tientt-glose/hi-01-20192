import React, { Component } from 'react';
import { Menu, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';

const { SubMenu } = Menu 

class Header extends Component {

  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div id="header" className="header">
        <Row type="flex" align="middle">
          <Col span={6}>
            <div id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>ANT DESIGN PRO</span>
            </div>
          </Col>
          <Col span={18}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{float: 'right'}}>
              {/* <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" icon={<AppstoreOutlined />}>
                Navigation Two
              </Menu.Item>
              <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item> */}
              <SubMenu icon={<SettingOutlined />} title="Điều khiển drone">
                <Menu.Item key="setting:1">Điều khiển payload</Menu.Item>
                <Menu.Item key="setting:2">Xem danh sách drone xung quanh</Menu.Item>
                <Menu.Item key="setting:3">Thiết lập hành trình bay tự động</Menu.Item>
              </SubMenu>
              
              <SubMenu icon={<SettingOutlined />} title="Quản lý drone">
                <Menu.Item key="setting:1">Quản lý dữ liệu bay</Menu.Item>
                <Menu.Item key="setting:2">Quản lý lịch sử bay</Menu.Item>
                <Menu.Item key="setting:3">Quản lý các hành trình bay</Menu.Item>
                <Menu.Item key="setting:4">Quản lý các drone đang hoạt động trên bản đồ</Menu.Item>
                <Menu.Item key="setting:5">Quản lý tổ đội bay</Menu.Item>
                <Menu.Item key="setting:6">Quản lý thiết bị drone và thiết bị đi kèm</Menu.Item>
              </SubMenu>

              <SubMenu icon={<SettingOutlined />} title="Phân tích nguy cơ">
                <Menu.Item key="setting:1">Xem danh sách thành phần lưới điện</Menu.Item>
                <Menu.Item key="setting:2">Xem danh sách các nguy cơ tiềm ẩn</Menu.Item>
                <Menu.Item key="setting:3">Gửi cảnh báo và yêu cầu kiểm tra</Menu.Item>
              </SubMenu>

              <SubMenu icon={<SettingOutlined />} title="Giám sát trung tâm">
                <Menu.Item key="setting:1">Quản lý thành phần lưới điện</Menu.Item>
                <Menu.Item key="setting:2">Tiếp nhận thông tin cảnh báo, báo cáo</Menu.Item>
                <Menu.Item key="setting:3">Xem danh sách toàn bộ các đợt kiểm tra</Menu.Item>
                <Menu.Item key="setting:4">Tạo đợt kiểm tra thủ công</Menu.Item>
                <Menu.Item key="setting:5">Tạo đợt kiểm tra tự động</Menu.Item>
              </SubMenu>

              <SubMenu icon={<SettingOutlined />} title="Báo cáo kiểm tra">
                <Menu.Item key="setting:1">Xem danh sách các đợt kiểm tra</Menu.Item>
                <Menu.Item key="setting:2">Quản lý vị trí của các đợt kiểm tra trên bản đồ</Menu.Item>
                <Menu.Item key="setting:3">Tạo báo cáo kết quả kiểm tra theo mẫu</Menu.Item>
              </SubMenu>

              <SubMenu icon={<SettingOutlined />} title="Giám sát thi công">
                <Menu.Item key="setting:1">Xem danh sách công trình</Menu.Item>
                <Menu.Item key="setting:2">Thống kê tiến độ</Menu.Item>
                <Menu.Item key="setting:3">Tạo công trình</Menu.Item>
                <Menu.Item key="setting:4">Tạo báo cáo kết quả tiến độ theo mẫu</Menu.Item>
              </SubMenu>

            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;