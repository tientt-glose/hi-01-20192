import React, { Component } from 'react';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForCreateTemplate from '../component/ForReport/BreadCrumbForCreateTemplate'
import FormBuilder from 'react-form-builder2';
import { Button } from 'reactstrap';

class CreateReportTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForCreateTemplate />
        <FormBuilder.ReactFormBuilder 
          
        />
        <Button>Hoàn thiện mẫu báo cáo</Button>
        <Footer />
      </div>
    );
  }
}

export default CreateReportTemplate;