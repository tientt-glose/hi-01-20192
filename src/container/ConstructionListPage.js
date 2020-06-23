import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Button, Divider, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForConstructionList from '../component/ForConstructionList/BreadCrumbForConstructionList'
import ConstructionList from '../component/ForConstructionList/ConstructionList'

const { Search } = Input;
class ConstructionListPage extends Component {

  state =  {
    searchString: '',
    allItems: [
      {
        title: 'Dọn dẹp hành lang tuyến cột A2',
        imgSrc: 'https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg',
        address: 'Thư viện Tạ Quang Bửu',
        time: '08/03/2020 - NA',
        member: '20 kỹ sư'
      }, 
      {
        title: 'Sửa tụ điện cột F25',
        imgSrc: 'https://jimglaserlaw.com/wp-content/uploads/2018/11/constructionsitestockphoto.jpg',
        address: '458 Minh Khai, Vĩnh Tuy, Hà Nội',
        time: '16/04/2020 - 01/07/2020',
        member: '15 kỹ sư'
      }, 
      {
        title: 'Công trình C',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsp9a6CRKWKp6UsF0ZrYCImUEPq-07Hmtw73uU95O9XHvPexK6&usqp=CAU',
        address: 'Địa chỉ',
        time: 'Ngày khởi công - Ngày hoàn tất',
        member: 'Số kỹ sư tham gia'
      }, 
      {
        title: 'Công trình D',
        imgSrc: 'https://base.imgix.net/files/base/ebm/tdworld/image/2019/04/tdworld_18433_substation_lines_kurmyshov.png?auto=format&fit=crop&h=432&w=768',        
        address: 'Địa chỉ',
        time: 'Ngày khởi công - Ngày hoàn tất',
        member: 'Số kỹ sư tham gia'
      }, 
      {
        title: 'Công trình E',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPMDMU1-adNSsUF1wFtir6Aq96GWltT6SwdaMMNPI23uusRnQN&usqp=CAU',
        address: 'Địa chỉ',
        time: 'Ngày khởi công - Ngày hoàn tất',
        member: 'Số kỹ sư tham gia'
      }, 
      {
        title: 'Công trình F',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRcJnqXMdSdNeWFBOuZs6iPPeIIECb04uX-QTKiFERJ-EpSTGy&usqp=CAU',
        address: 'Địa chỉ',
        time: 'Ngày khởi công - Ngày hoàn tất',
        member: 'Số kỹ sư tham gia'
      }, 
    ],
    displayItems: []
  }

  _onSearchChanged = (event) => {
    this.setState({ searchString: event.target.value })
  };

  render() {
    console.log(this.state.searchString)
    const displayedProject = this.state.allItems.filter(
      item => 
        item.title.toLowerCase().includes(this.state.searchString.toLowerCase()) ||
        item.address.toLowerCase().includes(this.state.searchString.toLowerCase())
    )
    return (
      <div>
        <Header />
        <BreadCrumbForConstructionList />
        <div className="site-card-wrapper">
        <Divider>Lựa chọn công trình để thiết lập tiến độ và xem thống kê tiến độ</Divider>
        <Search placeholder="Nhập tên công trình cần tìm kiếm" enterButton onChange={this._onSearchChanged} />
          <div style={{ marginTop: 16, marginBottom: 16, textAlign: 'right' }}>
            <Link to={`/construction-add`}>
              <Button type="primary" size="large" shaspe="round" icon={<PlusOutlined />}>Tạo công trình</Button>
            </Link>
          </div>
          <ConstructionList projects = {displayedProject} />
          <Pagination style={{ marginTop: 16, textAlign: 'center' }} defaultCurrent={1} total={50} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ConstructionListPage;