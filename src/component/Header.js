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
              <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" icon={<AppstoreOutlined />}>
                Navigation Two
              </Menu.Item>
              <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
                {/* <Menu.ItemGroup title="Item 1"> */}
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                {/* </Menu.ItemGroup> */}
                {/* <Menu.ItemGroup title="Item 2"> */}
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;