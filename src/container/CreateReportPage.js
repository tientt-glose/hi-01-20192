import React, { Component } from 'react';
import FormBuilder from 'react-form-builder2';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForCreateReport from '../component/ForReport/BreadCrumbForCreateReport'

const data = [
  
];

class CreateReportPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForCreateReport />
        <FormBuilder.ReactFormGenerator
          download_path=""
          answer_data={{}}
          hide_actions = {true}
          variables={this.props.variables}
          data={data} />
        <Footer />
      </div>
    );
  }
}

export default CreateReportPage;