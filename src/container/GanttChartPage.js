import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card, Col, Row, Divider, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Header from '../component/Header'
import Footer from '../component/Footer'
import GanttCRUD from '../component/ForGantt/Gantt_CRUD'
import BreadCrumbForGantt from '../component/ForGantt/BreadCrumbForGantt'
import ConstructionInfo from '../component/ForGantt/ConstructionInfo'
import PieChart from '../component/ForChart/PieChart'
import ColChart from '../component/ForChart/ColChart'

const { Sider, Content } = Layout;

class GanttChartPage extends Component {

  constructor(props) {
    super(props);
    let d1 = new Date();
    d1.setDate(d1.getDate() - 8);
    let d2 = new Date();
    d2.setDate(d2.getDate() - 3);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);
    let d5 = new Date();
    d5.setDate(d5.getDate() - 2);
    let d6 = new Date();
    d6.setDate(d6.getDate() + 4);
    let d7 = new Date();
    d7.setDate(d7.getDate() - 9);
    let d8 = new Date();
    d8.setDate(d8.getDate() - 2);
    let d33 = new Date();
    d33.setDate(d33.getDate() - 10);
    let d34 = new Date();
    d34.setDate(d34.getDate() - 3);

    let work = {
      name: "Công trình A",
      leader: "Nguyễn Văn A",
      start: "16/04/2020",
      end: "01/07/2020",
      duration: 65,
      members: 15,
      imgUrl: "https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg"
    }

    let data = [
      {
        id: 1,
        start: d1,
        end: d2,
        name: 'Demo Task 1',
        percentage: 100
      },
      {
        id: 2,
        start: d3,
        end: d4,
        name: 'Demo Task 2',
        color: 'orange',
        percentage: 0
      },
      {
        id: 3,
        start: d5,
        end: d6,
        name: 'Demo Task 3',
        color: 'red',
        percentage: 0
      },
      {
        id: 4,
        start: d7,
        end: d8,
        name: 'Demo Task 4',
        color: 'blue',
        percentage: 20
      }
    ];
    for (let i = 5; i < 27; i++) {
      let percent = Math.floor(Math.random() * 100) + 1
      if (i % 4 === 0) percent = 100
      let newTask = {
        id: i,
        start: this.getRandomStartDate(),
        end: this.getRandomEndDate(),
        name: 'Demo Task ' + i,
        color: this.getRandomColor(),
        percentage: percent
      }
      data.push(newTask)
    }

    data[16] = {
      id: 17,
      start: d33,
      end: d34,
      name: 'Demo Task 17',
      color: this.getRandomColor(),
      percentage: 100
    }
    this.state = { data: data, work: work }
  }

  getRandomStartDate() {
    let result = new Date();
    result.setDate(result.getDate() - Math.random() * 10 + 5);
    return result;
  }
  getRandomEndDate() {
    let result = new Date();
    result.setDate(result.getDate() + Math.random() * 2 + 5);
    return result;
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForGantt />
        <Layout style={{ "background-color": "white" }}>
          <Sider style={{ "background-color": "white", height: "100%" }}><ConstructionInfo work={this.state.work} /></Sider>
          <Content style={{ "background-color": "white" }}><GanttCRUD data={this.state.data} addTask={this.addTask} /> </Content>
        </Layout>
        {/* <ConstructionInfo 
          work = {this.state.work} />
        <GanttCRUD
          data = {this.state.data} />  */}
        <br /> <br />
        {/* Top-Card */}

        <Divider>Thống kê tiến độ</Divider>
        <div className="top-card-wrapper">
          <Row gutter={24}>
            <Col span={6}>
              <Card style={{ background: '#95de64' }} title="Đang thực hiện" bordered={false}>
                <h1>20</h1>công việc
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ background: '#fff566' }} title="Chờ review" bordered={false}>
                <h1>20</h1>công việc
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ background: '#ff9c6e' }} title="Hoàn thành" bordered={false}>
                <h1>20</h1>công việc
              </Card>
            </Col>
            <Col span={6}>
              <Card style={{ background: 'red' }} title="Quá hạn" bordered={false}>
                <h1>5</h1>công việc
              </Card>
            </Col>
          </Row>
        </div>
        <Row gutter={[8, 16]}>
          <Col span={12} >
            <PieChart />
          </Col>
          <Col span={12} >
            <ColChart />
          </Col>
        </Row>

        <Divider>Thao tác chức năng</Divider>
        <Row gutter={16}>
          <Col span={6}>
            <div style={{ margin: 16, textAlign: 'center' }}>
              <Link to={`/create-report`}>
                <Button type="primary" size="large" shaspe="round" icon={<PlusOutlined />}>Tạo báo cáo theo mẫu</Button>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ margin: 16, textAlign: 'center' }}>
              <Link to={`/create-report`}>
                <Button type="primary" size="large" shaspe="round" icon={<PlusOutlined />}>Tạo báo cáo tiến độ hàng ngày</Button>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ margin: 16, textAlign: 'center' }}>
              <Link to={`/create-report`}>
                <Button type="primary" size="large" shaspe="round" icon={<PlusOutlined />}>Tạo báo cáo kiểm tra chức năng</Button>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ margin: 16, textAlign: 'center' }}>
              <Link to={`/create-report`}>
                <Button type="primary" size="large" shaspe="round" icon={<PlusOutlined />}>Tạo báo cáo lắp đặt thành phần mới</Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Footer />
      </div>
    );
  }
}

export default GanttChartPage;