import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom'

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForSignUp from '../component/ForSignIn/BreadCrumbForSignUp'

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 15,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 15,
  },
};

class SignUp extends Component {
  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  onSignup = (e) => {
    e.preventDefault()
    this.props.history.push('/')
    this.props.openNotification('Sign up successfully!')
  }

  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForSignUp />
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: 'Hãy nhập tên của bạn!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Hãy nhập email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: 'Hãy nhập tên đăng nhập!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Hãy nhập mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={this.onSignup}>
                Submit
              </Button>
          </Form.Item>
        </Form>
        <Footer />
      </div>
    );
  }
}

export default withRouter(SignUp);