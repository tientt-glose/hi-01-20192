import React, { Component } from 'react';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForCreateTemplate from '../component/ForReport/BreadCrumbForCreateTemplate'
import FormBuilder from 'react-form-builder2';
import TemplateBar from '../component/ForReport/TemplateBar'

class CreateReportTemplate extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForCreateTemplate />
        <TemplateBar />
        <FormBuilder.ReactFormBuilder />
        <Footer />
      </div>
    );
  }
}

export default CreateReportTemplate;