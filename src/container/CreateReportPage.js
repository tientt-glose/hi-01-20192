import React, { Component } from 'react';
import FormBuilder from 'react-form-builder2';

import Header from '../component/Header'
import Footer from '../component/Footer'
import BreadCrumbForCreateReport from '../component/ForReport/BreadCrumbForCreateReport'

const data = [
  {
    "id": "A527135C-48E5-4984-9B6B-286DD7F8D168",
    "element": "TextInput",
    "text": "Text Input",
    "required": true,
    "canHaveAnswer": true,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "field_name": "text_input_FC831BA2-ECB8-4C17-BF87-ADE3155CC193",
    "label": "<span style=\"font-size: 24px;\"><strong>Công trình</strong></span> ",
    "dirty": false
  },
  {
    "id": "B5BF7FEA-4F06-4D65-8AC5-BE00E27F9589",
    "element": "TextInput",
    "text": "Text Input",
    "required": true,
    "canHaveAnswer": true,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "field_name": "text_input_830A59E7-AD46-4C7F-A0EE-623CD586B3E2",
    "label": "Các thành phần liên quan ",
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
  },
  {
    "id": "6C669A0A-7432-42C4-9138-CD6A5D2D9C45",
    "element": "Camera",
    "text": "Camera",
    "required": false,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "field_name": "camera_73ECFE3E-D8B7-4B5C-8288-DF8834D1ED61",
    "label": "Tải lên ảnh liên quan ",
    "dirty": false
  },
  {
    "id": "5C36043D-629B-45B0-B847-E49F4956AD09",
    "element": "Checkboxes",
    "text": "Checkboxes",
    "required": false,
    "canHaveAnswer": true,
    "canHavePageBreakBefore": true,
    "canHaveAlternateForm": true,
    "canHaveDisplayHorizontal": true,
    "canHaveOptionCorrect": true,
    "canHaveOptionValue": true,
    "canPopulateFromApi": true,
    "field_name": "checkboxes_586A027F-45A3-49EE-BEA8-B82610D76A83",
    "label": "Các trường hợp thường gặp ",
    "options": [
      {
        "value": "th_nh_ph_n_ho_t_ng_b_nh_th_ng",
        "text": "Thành phần hoạt động bình thường",
        "key": "checkboxes_option_556A107B-21CE-45CA-B4BE-542E7F8E7884"
      },
      {
        "value": "th_nh_ph_n_ho_t_ng_b_nh_th_ng_nh_ng_c_n_b_o_tr_",
        "text": "Thành phần hoạt động bình thường nhưng cần bảo trì",
        "key": "checkboxes_option_8E83B4ED-E6E7-4579-9523-9D8D8693C422"
      },
      {
        "value": "th_nh_ph_n_ho_t_ng_d_i_c_ng_su_t",
        "text": "Thành phần hoạt động dưới công suất",
        "key": "checkboxes_option_CD847F9A-B95D-447B-909E-6191B3B67ADC"
      },
      {
        "value": "th_nh_ph_n_ho_t_ng_kh_ng_b_nh_th_ng",
        "text": "Thành phần hoạt động không bình thường",
        "key": "CC242EC8-0B62-4383-899A-BFB47C414E64"
      },
      {
        "value": "th_nh_ph_n_kh_ng_ho_t_ng",
        "text": "Thành phần không hoạt động",
        "key": "62EA74C1-039D-4DF5-A72B-6BFAFB204776"
      }
    ],
    "dirty": true,
    "inline": false
  },
  {
    "id": "5D8E4182-5A6F-4F98-8554-0782C1923776",
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
    "field_name": "radiobuttons_DF112678-F834-436C-B0B6-9499DC7C66A7",
    "label": "Chất lượng cơ sở hạ tầng ",
    "options": [
      {
        "value": "r_t_k_m",
        "text": "Rất kém",
        "key": "radiobuttons_option_2F908E2B-617F-4F26-A2D3-CAD011A5C984"
      },
      {
        "value": "k_m",
        "text": "Kém",
        "key": "radiobuttons_option_14B2D7FA-690D-4F92-8F1E-B9A68D002ABB"
      },
      {
        "value": "b_nh_th_ng",
        "text": "Bình thường",
        "key": "radiobuttons_option_92AB17B0-298B-4DBF-BD4D-6BFBB2C3E842"
      },
      {
        "value": "t_t",
        "text": "Tốt",
        "key": "652DD31C-2AA6-40F0-9D5C-355370282BE9"
      },
      {
        "value": "r_t_t_t",
        "text": "Rất tốt",
        "key": "9426BC43-EF99-4A2A-8647-D422A344204C"
      }
    ],
    "dirty": true,
    "inline": true
  },
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
    "label": "Ghi chú ",
    "dirty": false
  },
  {
    "id": "E75BC433-2B96-44A2-8DE5-725792C804BF",
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
    "field_name": "radiobuttons_89715A6D-E965-42CA-9A77-390B92BA4B03",
    "label": "Chất lượng chức năng ",
    "options": [
      {
        "value": "r_t_k_m",
        "text": "Rất kém",
        "key": "radiobuttons_option_2E7917B9-6A84-4721-AAF3-0F779027BFEE"
      },
      {
        "value": "k_m",
        "text": "Kém",
        "key": "radiobuttons_option_8B5E8302-4B77-457A-B404-7CDA9F2ED671"
      },
      {
        "value": "b_nh_th_ng",
        "text": "Bình thường",
        "key": "radiobuttons_option_FF6FDAB0-94AA-4ED8-9C65-0BA9992615C8"
      },
      {
        "value": "t_t",
        "text": "Tốt",
        "key": "C0D51577-8830-421D-B686-4988558EF0D8"
      },
      {
        "value": "r_t_t_t",
        "text": "Rất tốt",
        "key": "13F6DAF8-6336-484C-9273-F37D4EAB1FC1"
      }
    ],
    "dirty": false,
    "inline": true
  },
  {
    "id": "24BA08EC-C6F0-4CDE-A0E6-DDEF029B3840",
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
    "field_name": "text_area_CAE78682-1196-4625-AE95-E6D760F2C3EE",
    "label": "Ghi chú ",
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
    "label": "Đánh giá tổng quan ",
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