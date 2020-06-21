import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card, Col, Row, Divider, Button,Table, Tag,Space } from 'antd';
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

    let supervisor = ["Đoàn Duy Phương", "Phạm Hữu Thọ", "Bùi Ngọc Tú", "Nguyễn Mạnh Tiến"]

    let work = {
      name: "Dọn dẹp hành lang tuyến cột A2",
      leader: "Phạm Hữu Thọ",
      start: "16/04/2020",
      end: "01/07/2020",
      duration: 65,
      members: 15,
      imgUrl: "https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg"
    }
    
    let name = [
      "Khảo sát mặt bằng",
      "Phân tích báo cáo",
      "Phân tích kiểm tra",
      "Phân tích bản vẽ",
      "Nghiên cứu nghiệp vụ",
      "Ước lượng vật liệu",
      "Đánh giá mức độ hỏng hóc",
      "Mua vật liệu xây dựng",
      "Vận chuyển vật liệu xây dựng khu 1",
      "Kiểm tra chất lượng vật liệu khu 1",
      "Đánh dấu khu vực dọn dẹp",
      "Chặt hạ cây khu 1",
      "Tiếp tế vật liệu xây dựng khu 1",
      "Gia cố cột điện khu 1",
      "Vận chuyển vật liệu xây dựng khu 2",
      "Kiểm tra chất lượng vật liệu khu 2",
      "Gia cố hành lang tuyến khu 2",
      "Tiếp tế vật liệu xây dựng khu 2",
      "Gia cố cột điện khu 2",
      "Triển khai drone quan sát khu 1",
      "Triển khai drone quan sát khu 2",
      "Đánh giá kết quả khu 1",
      "Đánh giá kết quả khu 2",
      "Đánh giá mức an toàn",
      "Tổng kết chi phí",
      "Đánh giá mức độ hoàn thành",
      "Bảo trì"
    ]

    let data = [
      {
        id: 1,
        start: d1,
        end: d2,
        name: name[0],
        percentage: 100,
        supervisor: supervisor[Math.floor(Math.random() * supervisor.length)]
      },
      {
        id: 2,
        start: d3,
        end: d4,
        name: name[1],
        color: 'orange',
        percentage: 0,
        supervisor: supervisor[Math.floor(Math.random() * supervisor.length)]
      },
      {
        id: 3,
        start: d5,
        end: d6,
        name: name[2],
        color: 'red',
        percentage: 0,
        supervisor: supervisor[Math.floor(Math.random() * supervisor.length)]
      },
      {
        id: 4,
        start: d7,
        end: d8,
        name: name[3],
        color: 'blue',
        percentage: 20,
        supervisor: supervisor[Math.floor(Math.random() * supervisor.length)]
      }
    ];
    for (let i = 5; i <= name.length; i++) {
      let percent = Math.floor(Math.random() * 100) + 1
      if (i % 4 === 0) percent = 100
      let newTask = {
        id: i,
        start: this.getRandomStartDate(),
        end: this.getRandomEndDate(),
        name: name[i-1],
        color: this.getRandomColor(),
        percentage: percent,
        // supervisor: supervisor[Math.floor(Math.random() * supervisorCount)]
        supervisor: supervisor[Math.floor(Math.random() * supervisor.length)]
      }
      data.push(newTask)
    }

    data[11] = {
      id: 12,
      start: d33,
      end: d34,
      name: name[11],
      color: this.getRandomColor(),
      percentage: 100,
      supervisor: supervisor[Math.floor(Math.random() * supervisor.length)]
    }
    
    const columnsData = [
      
    ];
    for (let i = 1; i < name.length; i++){
      let task = {
        taskName: data[i].name,
        worker: data[i].supervisor,
        start: data[i].start.toString().slice(0,10).replace(/-/g,""),
        end: data[i].end.toString().slice(0,10).replace(/-/g,""),
        tags: (new Date() - data[i].end > 0) ? (
          data[i].percentage < 100 ? "Quá hạn" : "Đúng hạn"
        ) : "Đang tiến hành",
      }
      columnsData.push(task);
    }
    

    const columns = [
      {
        title: 'Tên công trình',
        dataIndex: 'taskName',
        key: 'taskName',
        // render: text => <a>{text}</a>,
      },
      {
        title: 'Người thực hiện',
        dataIndex: 'worker',
        key: 'worker',
      },
      {
        title: 'Ngày bắt đầu',
        dataIndex: 'start',
        key: 'start',
      },
      {
        title: 'Ngày kết thúc',
        dataIndex: 'end',
        key: 'end',
      },
      {
        title: 'Trạng thái',
        key: 'tags',
        dataIndex: 'tags',        
        render: tags => (
          <>
            {[tags].map(tag => {
              let color = tag === 'Quá hạn' ? 'red' : 'green';
              if (tag === 'Đang tiến hành') {
                color = 'yellow';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      
    ];
    this.state = { data: data, work: work, columns: columns, columnsData: columnsData }  


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
        <Divider>Lựa chọn dải thời gian gantt để xem thêm thông tin</Divider>
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
        <Divider>Bảng phân chia công việc</Divider> <br/>
        <Table columns={this.state.columns} dataSource={this.state.columnsData} bordered />

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
              <Link to={`/choose-report`}>
                <Button type="primary" size="large" shaspe="round" icon={<PlusOutlined />}>Tạo báo cáo theo mẫu</Button>
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ margin: 16, textAlign: 'center' }}>
              <Link to={`/create-report-2`}>
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