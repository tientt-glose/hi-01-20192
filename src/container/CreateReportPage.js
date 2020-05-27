import React, { Component } from 'react';
import {
  Container, Form,
  FormGroup, Label, Input,
  Button, FormText 
} from 'reactstrap';
import '../component/ForReport/Report.css';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForCreateReport from '../component/ForReport/BreadCrumbForCreateReport'

class CreateReportPage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForCreateReport />
        <div className="site-card-wrapper">
          <div
          style={{
            backgroundColor: 'white',
            backgroundSize: "cover",
          }}
          >
          <Container className="App">
            <h2>Báo cáo kiểm tra định kỳ</h2>
            <Form>
              <legend>Công trình</legend>
              <FormGroup>
                <Label for="congtrinh">Công trình</Label>
                <Input type="text" name="congtrinh" id="congtrinh" placeholder="Công trình A" />
              </FormGroup>

              <legend>Thông tin báo cáo</legend>
              <FormGroup>
                <Label for="thongtin1">Thông tin 1</Label>
                <Input type="text" name="thongtin1" id="thongtin1" placeholder="Ghi chú" />
              </FormGroup>
              <FormGroup>
                <Label for="thongtin2">Thông tin 2</Label>
                <Input type="textarea" name="thongtin2" id="thongtin2" placeholder="Ghi chú" />
              </FormGroup>
              <FormGroup>
                <Label for="thongtin3">Thông tin 3</Label>
                <Input type="select" name="thongtin3" id="thongtin3">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="file1">Tệp đính kèm</Label>
                <Input type="file" name="file1" id="file1" />
                <FormText color="muted">
                  Ghi chú về tệp tải lên
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Đánh giá</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Rất kém
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Kém
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Vừa
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Tốt
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Xuất xắc
                  </Label>
                </FormGroup>
              </FormGroup>
              <legend>Thông tin phụ</legend>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Lĩnh vực 1
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Lĩnh vực 2
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Lĩnh vực 3
                </Label>
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="thongtinphu" id="thongtinphu" placeholder="Ghi chú" />
              </FormGroup>
              <Button>Hoàn thiện báo cáo</Button>
            </Form>
          </Container>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreateReportPage;