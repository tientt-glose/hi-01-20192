import React from 'react';
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';

export default class TemplateBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      previewVisible: false,
    };

    const update = this._onChange.bind(this);
    ElementStore.subscribe(state => update(state.data));
  }

  showPreview() {
    this.setState({
      previewVisible: true,
    });
  }

  closePreview() {
    this.setState({
      previewVisible: false,
    });
  }

  saveTemplate() {
    console.log('submit: ', this.state.data);
  }

  _onChange(data) {
    this.setState({
      data,
    });
  }

  render() {
    let modalClass = 'modal';
    if (this.state.previewVisible) {
      modalClass += ' show d-block';
    }

    return (
      <div className="clearfix" style={{ margin: '10px', width: '70%' }}>
        <h4 className="float-left">Báo cáo kiểm tra định kỳ</h4>
        <button className="btn btn-primary float-right" style={{ marginRight: '10px' }} onClick={this.showPreview.bind(this)}>Hoàn thiện mẫu báo cáo</button>

        { this.state.previewVisible &&
          <div className={modalClass}>
            <div className="modal-dialog">
              <div className="modal-content" style = {{ padding: '30px' }}>
                <ReactFormGenerator
                  download_path=""
                  answer_data={{}}
                  hide_actions = {true}
                  variables={this.props.variables}
                  data={this.state.data} />

                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.saveTemplate.bind(this)}>Lưu mẫu báo cáo</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closePreview.bind(this)}>Trở lại</button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}