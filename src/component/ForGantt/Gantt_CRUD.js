import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import TimeLine from 'react-gantt-timeline';
import './Gantt.css';

const A_DAY = 60*60*24*1000;
const dateFormat = 'YYYY/MM/DD';

class Gantt_CRUD extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data, links: [], selectedItem: null };
  }

  genID() {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
  }

  getRandomDate() {
    let result = new Date();
    result.setDate(result.getDate() + Math.random() * 10 + 1);
    return result;
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  createLink(start, end) {
    return {
      id: this.genID(),
      start: start.task.id,
      end: end.task.id
    };
  }
  onUpdateTask = (item, props) => {
    item.start = props.start ? props.start : item.start;
    item.end = props.end ? props.end : item.end;
    item.name = props.name ? props.name : item.name;
    this.setState({ data: [...this.state.data] });
  };
  onCreateLink = (item) => {
    let newLink = this.createLink(item.start, item.end);
    this.setState({ links: [...this.state.links, newLink], selectedItem: newLink });
  };
  onSelectItem = (item) => {
    console.log(`Select Item ${item}`);
    console.log(item)
    this.setState({ selectedItem: item });
  };

  addTask = () => {
    let newTask = {
      id: this.state.data.length + 1,
      start: new Date(),
      end: this.getRandomDate(),
      name: 'New Task',
      color: this.getRandomColor(),
      percentage: Math.floor(Math.random() * 100) + 1
    };
    this.setState({ data: [newTask, ...this.state.data] });
  };

  delete = () => {
    console.log('On delete');
    if (this.state.selectedItem) {
      let index = this.state.links.indexOf(this.state.selectedItem);
      if (index > -1) {
        this.state.links.splice(index, 1);
        this.setState({ links: [...this.state.links] });
      }
      index = this.state.data.indexOf(this.state.selectedItem);
      if (index > -1) {
        this.state.data.splice(index, 1);
        this.setState({ data: [...this.state.data] });
      }
    }
  };

  onChangeStartDay = (value, dateString) => {
    let data = this.state.data
    if(this.state.selectedItem && dateString) {
      // console.log(data.find(item => item.id === this.state.selectedItem.id))
      data.find(item => item.id === this.state.selectedItem.id).start = new Date(dateString)
      // data[this.state.selectedItem.id - 1].start = dateString ? new Date(dateString) : this.state.selectedItem.start
    }
    console.log(data)
    this.setState({ data: [...this.state.data] });
  }

  onChangeEndDay = (value, dateString) => {
    let data = this.state.data
    if(this.state.selectedItem && dateString) {
      data.find(item => item.id === this.state.selectedItem.id).end = new Date(dateString)
      // data[this.state.selectedItem.id - 1].end = dateString ? new Date(dateString) : this.state.selectedItem.end
    }
    this.setState({ data: [...this.state.data] });
  }

  functionForDeleteButton = (work) => {
    this.onSelectItem(work)
    this.delete()
  }

  render() {
    const printDateAndDuration = 
      this.state.data.map(work => {
        // const checkDueDate = work.percentage < 100 && (new Date() - work.end > 0) ? 'red': 'black'
        const checkDueDate = (new Date() - work.end > 0) ? (
          work.percentage < 100 ? "red" : "blue"
        ) : "black"
        return (
          <tr key={work.id} style={{ color:  checkDueDate }}>
            {/* <td className="non-header">{work.start.toLocaleDateString()}</td>
            <td className="non-header">{work.end.toLocaleDateString()}</td> */}
            <td className="non-header" onClick={() => this.onSelectItem(work)}>
              <DatePicker value={moment(work.start, dateFormat)} format={dateFormat} onChange={this.onChangeStartDay} bordered={false} />
            </td>
            <td className="non-header" onClick={() => this.onSelectItem(work)}>
              <DatePicker value={moment(work.end, dateFormat)} format={dateFormat} onChange={this.onChangeEndDay} bordered={false}/>
            </td>
            <td className="non-header" >{((work.end - work.start)/A_DAY).toFixed(0)}</td>
            {/* <td className="non-header"></td> */}
          </tr>
        )
      })
    
    return (
      <div>
        <div className="app-container">
          <div>
            <Button type="primary" id="ganttAddButton" icon={<PlusOutlined />} onClick={this.addTask} shape="circle"></Button>
            <Button id="ganttDeleteButton" icon= {<MinusOutlined />} onClick={this.delete} shape="circle" danger></Button>
          </div>
          <table id="dateForGantt"> 
            <tbody>
              <tr>
                <td className="header">Start date</td>
                <td className="header">End date</td>
                <td className="header" style={{width: "1px"}}>Duration</td>
                {/* <td className="header"></td> */}
              </tr>
              {printDateAndDuration}
            </tbody>
          </table>
          <div className="time-line-container">
            <TimeLine
              data={this.state.data}
              links={this.state.links}
              onUpdateTask={this.onUpdateTask}
              onCreateLink={this.onCreateLink}
              onSelectItem={this.onSelectItem}
              selectedItem={this.state.selectedItem}
            />
          </div>
        </div>
        
        {/* <div>
          this is a date
          {`${this.state.data[0].start}`}
        </div> */}
      </div>
    );
  }
}

export default Gantt_CRUD;
