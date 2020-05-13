import React, { Component } from 'react';

// const { Meta } = Card;

class ConstructionInfo extends Component {

  constructor(props) {
    super(props);

    const tabList = [
      {
        key: 'Người phụ trách',
        tab: 'Người phụ trách',
      },
      {
        key: 'Thời gian dự định',
        tab: 'Thời gian dự định',
      },
      {
        key: 'Số kỹ sư tham gia',
        tab: 'Số kỹ sư tham gia',
      },
    ];
    
    const contentList = {
      'Người phụ trách': <p>{this.props.work.leader}</p>,
      'Thời gian dự định': <p>{this.props.work.start} - {this.props.work.end}: {this.props.work.duration} ngày</p>,
      'Số kỹ sư tham gia': <p>{this.props.work.members} thành viên</p>,
    }

    this.state = { 
      work: this.props.work, 
      tabList: tabList, 
      contentList: contentList,
      key: 'Người phụ trách'
    };
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div id="constructionInfo">
        {/* <Card size="small" title={this.state.work.name}>
          <p>Người phụ trách: {this.state.work.leader}</p>
          <p>{this.state.work.start} - {this.state.work.end}</p>
          <p>Thời gian dự định: {this.state.work.duration}</p>
          <p>Số kỹ sư tham gia: {this.state.work.members}</p>
        </Card> */}

        {/* <Card
          style={{ width: 260 }} cover = {<img alt="construction_site" style={{height: "180px"}} src={this.state.work.imgUrl} />}
          tabList={this.state.tabList}
          // activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {this.state.contentList[this.state.key]}
        </Card> */}
        <img src={this.state.work.imgUrl} alt="construction_site_img" style={{width: "100%"}}/>
        <div style={{"font-size": "12px", "margin-top": "4px", "margin-left": "7px" }}>
          <p>Người phụ trách: {this.state.work.leader}</p>
          <p>{this.state.work.start} - {this.state.work.end}</p>
          <p>Thời gian dự định: {this.state.work.duration}</p>
          <p>Số kỹ sư tham gia: {this.state.work.members}</p>
        </div>
        
      </div>
    );
  }
}

export default ConstructionInfo;