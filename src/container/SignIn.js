import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom'

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForSignIn from '../component/ForSignIn/BreadCrumbForSignIn'

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

class SignIn extends Component {
  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  onSignin = (e) => {
    e.preventDefault()
    this.props.history.push('/')
    this.props.openNotification('Sign in successfully!')
  }

  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForSignIn />
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
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
              <Button type="primary" htmlType="submit" onClick={this.onSignin}>
                Submit
              </Button>
          </Form.Item>
        </Form>
        <Footer />
      </div>
    );
  }
}

export default withRouter(SignIn);