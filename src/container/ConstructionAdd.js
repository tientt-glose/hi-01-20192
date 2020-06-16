import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, DatePicker, InputNumber, Upload, Select, Tooltip } from 'antd';
import { InboxOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForConstructionAdd from '../component/ForConstructionAdd/BreadCrumbForConstructionAdd'

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;
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


class ConstructionAdd extends Component {
  state = {
    content: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  onFinish = fieldsValue => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const values = {
      ...fieldsValue,
      'range-picker': [rangeValue[0].format('DD-MM-YYYY'), rangeValue[1].format('DD-MM-YYYY')],
    };
    console.log('Received values of form: ', values);
  };
  normFile = e => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForConstructionAdd />
        <Form
          {...layout}
          name="basic"
          // initialValues={{
          //   remember: true,
          // }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Loại công trình"
            name="contruction-type"
            rules={[
              {
                required: true,
                message: 'Hãy lựa chọn loại công trình!',
              },
            ]}
          >
            <Select style={{ width: '30%' }} allowClear>
              <Option value="01">Công trình sửa chữa </Option>
              <Option value="02">Dọn dẹp hành lang tuyến </Option>
              <Option value="03">Khác </Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Tên công trình"
            name="contruction-name"
            rules={[
              {
                required: true,
                message: 'Hãy gõ tên công trình!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Địa chỉ sửa chữa"
            name="address"
            rules={[
              {
                required: true,
                message: 'Hãy gõ địa chỉ!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="range-picker"
            label={
              <span>
                Ngày khởi công - Ngày hoàn thành&nbsp;
                <Tooltip title="Kéo & Chọn để có thể lựa chọn khoảng thời gian bắt đầu kết thúc.">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>}
            {...rangeConfig}>
            <RangePicker />
          </Form.Item>

          <Form.Item label="Số kỹ sư tham gia">
            <Form.Item name="input-number" noStyle>
              <InputNumber min={1} />
            </Form.Item>
            <span className="ant-form-text"> kỹ sư</span>
          </Form.Item>

          <Form.Item label="Lỗi và phương án khắc phục">
            <Form.Item name="input-textarea" >
              <TextArea
                // style={{ width: '30%' }}
                value={this.state.content}
                onChange={this.onChange}
                placeholder="Type something!"
                autoSize={{ minRows: 3, maxRows: 5 }}
                allowClear
              />
            </Form.Item>
          </Form.Item>

          <Form.Item label="Upload hình ảnh thực tế" style={{ marginTop: 45 }}>
            <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={this.normFile} noStyle>
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Link to={`/gantt`}>
              <Button type="primary" htmlType="submit">
                Xác nhận
            </Button>
            </Link>
            <Link to={`/construction-list`}>
              <Button danger htmlType="submit" style={{ float: 'right' }}>
                Hủy
              </Button>
            </Link>
          </Form.Item>

        </Form>

        <Footer />
      </div>
    );
  }
}

export default ConstructionAdd;