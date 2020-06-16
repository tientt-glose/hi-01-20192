import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Select, Checkbox } from 'antd';

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
const rangeConfig = {
  rules: [{ type: 'array', message: 'Please select time!' }],
};


class SignIn extends Component {
  onFinish = values => {
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
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
            <Link to={`/`}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Link>
          </Form.Item>
        </Form>

        <Footer />
      </div>
    );
  }
}

export default SignIn;