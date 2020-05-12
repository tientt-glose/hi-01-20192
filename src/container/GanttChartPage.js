import React, { Component } from 'react';

import Header from '../component/Header'
import GanttCRUD from '../component/ForGantt/Gantt_CRUD'
import BreadCrumbForGantt from '../component/ForGantt/BreadCrumbForGantt'
import ConstructionInfo from '../component/ForGantt/ConstructionInfo'

class GanttChartPage extends Component {

  constructor(props) {
    super(props);
    let d1 = new Date();
    let d2 = new Date();
    d2.setDate(d2.getDate() + 5);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);

    let work = {
      name: "Công trình A",
      leader: "Nguyễn Văn A",
      start: "16/04/2020",
      end: "01/07/2020",
      duration: 65,
      members: 15,
      imgUrl: "https://img.etimg.com/thumb/msid-69127844,width-1200,height-900,imgsize-347903,overlay-etrise/photo.jpg"
    }

    let data = [
      {
        id: 1,
        start: d1,
        end: d2,
        name: 'Demo Task 1',
        percentage: 100
      },
      {
        id: 2,
        start: d3,
        end: d4,
        name: 'Demo Task 2',
        color: 'orange',
        percentage: 0
      }
    ];

    this.state = { data: data, work: work }
  }

  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForGantt />
        <ConstructionInfo 
          work = {this.state.work} />
        <GanttCRUD
          data = {this.state.data} /> 
      </div>
    );
  }
}

export default GanttChartPage;