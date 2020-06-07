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
        <div style = {{ paddingLeft: '100px', paddingRight: '100px', paddingTop : '30px', paddingBottom : '30px', backgroundColor:'#A89C94FF'}}>
          <div style = {{backgroundColor:'#FFFFFF', borderRadius:'25px'}}>
            <div style={{padding:'30px', paddingTop:'50px'}}>
              <FormBuilder.ReactFormBuilder />
              <TemplateBar />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreateReportTemplate;