import React, { Component } from 'react';
import FormBuilder from 'react-form-builder2';
import { withRouter } from 'react-router-dom'
import { Modal, Divider, Row, Col, Statistic, Table, Tag } from 'antd';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForCreateReport from '../component/ForReport/BreadCrumbForCreateReport'

const infoData = [
  {
    "id": "7C442FD7-3C4E-483A-BA8C-DAE36BB51459",
    "element": "Paragraph",
    "text": "Paragraph",
    "static": true,
    "required": false,
    "bold": false,
    "italic": false,
    "content": "<span style=\"font-size: 24px;\"><strong>Công trình</strong></span><br>Dọn dẹp hành lang tuyến cột A2 ",
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "dirty": false
  },
  {
    "id": "C8C26B52-B877-4445-9906-0D690E12A0AF",
    "element": "Paragraph",
    "text": "Paragraph",
    "static": true,
    "required": false,
    "bold": false,
    "italic": false,
    "content": "<strong>Địa chỉ</strong><br>Thư viện Tạ Quang Bửu ",
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "dirty": false
  },
  {
    "id": "7A26D10F-0926-4339-8F9D-CBE8BBAE764B",
    "element": "Label",
    "text": "Label",
    "static": true,
    "required": false,
    "bold": false,
    "italic": false,
    "content": "<span style=\"font-size: 24px;\"><strong>Chi tiết báo cáo</strong></span> ",
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "dirty": false
  },
  {
    "id": "4C5D67D0-D7B0-453D-8509-AC645492F2CE",
    "element": "DatePicker",
    "text": "Date",
    "required": true,
    "readOnly": false,
    "defaultToday": true,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "dateFormat": "MM/dd/yyyy",
    "timeFormat": "hh:mm aa",
    "showTimeSelect": true,
    "showTimeSelectOnly": false,
    "field_name": "date_picker_C702B810-F39F-4108-9E51-D9708F8FB807",
    "label": "Ngày lập báo cáo ",
    "dirty": false
  }
];
const assetmentData = [
  {
    "id": "44B52CC4-E2E2-4827-9B8D-730E674C1E82",
    "element": "TextArea",
    "text": "Multi-line Input",
    "required": false,
    "canHaveAnswer": true,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "field_name": "text_area_68BEC2B4-9E84-41B9-94EE-0B8023AE1944",
    "label": "Ghi chú",
    "dirty": false
  },
  {
    "id": "42EE71F4-F5AA-4AD0-AFEE-4E722904312B",
    "element": "RadioButtons",
    "text": "Multiple Choice",
    "required": true,
    "canHaveAnswer": true,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "field_name": "radiobuttons_CB7756BB-0BE2-4BBC-8900-CE0A0C7158E3",
    "label": "Đánh giá tổng quan tiến độ",
    "options": [
      {
        "value": "r_t_k_m",
        "text": "Rất kém",
        "key": "radiobuttons_option_83B60823-0211-4064-8D8D-5F33273C99EC"
      },
      {
        "value": "k_m",
        "text": "Kém",
        "key": "radiobuttons_option_F2853866-CE3B-4F36-A71E-44A77F460F6F"
      },
      {
        "value": "b_nh_th_ng",
        "text": "Bình thường",
        "key": "radiobuttons_option_DD4B8A38-B7D0-4976-AE3B-7F446FF7E85C"
      },
      {
        "value": "t_t",
        "text": "Tốt",
        "key": "DE94ED25-55DC-4948-8701-8C86517384AE"
      },
      {
        "value": "r_t_t_t",
        "text": "Rất tốt",
        "key": "0343B027-EA7E-44C4-B61E-EAC2439FC421"
      }
    ],
    "dirty": true,
    "inline": true
  },
  {
    "id": "52350D36-C642-4E96-943F-BFBB496664EA",
    "element": "TextArea",
    "text": "Multi-line Input",
    "required": false,
    "canHaveAnswer": true,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "field_name": "text_area_F4C8961C-8D33-4C32-8926-5778E3A6DDB7",
    "label": "Ghi chú ",
    "dirty": false
  }
];

class CreateReportPage2 extends Component {

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

    let work = {
      name: "Dọn dẹp hành lang tuyến cột A2",
      leader: "Phạm Hữu Thọ",
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
    for (let i = 1; i <= 11; i++){
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
        title: 'Tên hạng mục',
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

  state = { visible: false };

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

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    e.preventDefault()
    this.props.history.push('/choose-report')
    this.props.openNotification('Tạo báo cáo thành công!')
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForCreateReport />
        <div style = {{ paddingLeft: '100px', paddingRight: '100px', paddingTop : '30px', paddingBottom : '30px', backgroundColor:'#A89C94FF'}}>
          <div style = {{backgroundColor:'#FFFFFF', borderRadius:'25px'}}>
            <div className="clearfix" style={{ paddingTop:'25px', marginLeft: '30px', width: '95%' }}>
              <h4 className="float-left">Báo cáo tiến độ thành viên</h4>
            </div>
            <div style={{padding:'30px'}}>
              <FormBuilder.ReactFormGenerator
                download_path=""
                answer_data={{}}
                hide_actions = {true}
                variables={this.props.variables}
                data={infoData} />

              <div className="site-module-wrapper">
                <Divider>Thông tin kiểm soát tiến độ</Divider>
                <Row gutter={16}>
                  <Col span={8}>
                    <Statistic title="Số hạng mục đang tiến hành" value={9} suffix="/ 11" valueStyle={{ color: '#40a9ff' }} />
                  </Col>
                  <Col span={8}>
                    <Statistic title="Số hạng mục đang quá tiến độ" value={1} suffix="/ 11" valueStyle={{ color: '#cf1322' }} />
                  </Col>
                  <Col span={8}>
                    <Statistic title="Số hạng mục hoàn thành" value={1} suffix="/ 11" valueStyle={{ color: '#3f8600' }} />
                  </Col>
                </Row>
              </div>

              <Divider>Bảng phân chia công việc</Divider> <br/>
              <Table columns={this.state.columns} dataSource={this.state.columnsData} bordered pagination={false} />

              <FormBuilder.ReactFormGenerator
                download_path=""
                answer_data={{}}
                hide_actions = {true}
                variables={this.props.variables}
                data={assetmentData} />
            </div>
            <div className="clearfix" style={{ paddingBottom:'30px', marginLeft: '30px', width: '95%' }}>
              <button className="btn btn-primary float-right" style={{ marginRight: '10px' }} onClick={this.showModal}>Hoàn thiện báo cáo</button>
              <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>Xác nhận tạo báo cáo?</p>
              </Modal>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(CreateReportPage2);