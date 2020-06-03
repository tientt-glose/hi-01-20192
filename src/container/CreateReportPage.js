import React, { Component } from 'react';
import FormBuilder from 'react-form-builder2';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForCreateReport from '../component/ForReport/BreadCrumbForCreateReport'

const data = [
  {
    "id": "DF69819A-C49D-4A26-9C3A-9777B076EB53",
    "element": "Header",
    "text": "Header Text",
    "static": true,
    "required": false,
    "bold": false,
    "italic": false,
    "content": "Placeholder Text...",
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true
  },
  {
    "id": "9D82A699-7578-4DD2-B0D6-254189C3C9C6",
    "element": "Paragraph",
    "text": "Paragraph",
    "static": true,
    "required": false,
    "bold": false,
    "italic": false,
    "content": "Placeholder Text...",
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true
  },
  {
    "id": "8831C0D9-20ED-447B-9AE0-755FEA91F15E",
    "element": "LineBreak",
    "text": "Line Break",
    "static": true,
    "required": false,
    "bold": false,
    "italic": false,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true
  },
  {
    "id": "77D8F53A-28B7-4B72-A997-AB1A9CCC116E",
    "element": "Dropdown",
    "text": "Dropdown",
    "required": false,
    "canHaveAnswer": true,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "field_name": "dropdown_786325B9-3776-4D10-A410-F25D9DA20685",
    "label": "Placeholder Label",
    "options": [
      {
        "value": "place_holder_option_1",
        "text": "Place holder option 1",
        "key": "dropdown_option_2C033C91-78B3-4CE0-B5B0-58936EE730CC"
      },
      {
        "value": "place_holder_option_2",
        "text": "Place holder option 2",
        "key": "dropdown_option_4BD0B8EE-720A-460C-A54F-994DDC7FF346"
      },
      {
        "value": "place_holder_option_3",
        "text": "Place holder option 3",
        "key": "dropdown_option_D8C2D6A0-DAD0-4C21-AD5C-E7A8C1CD88F9"
      }
    ]
  }
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