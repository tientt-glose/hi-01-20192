import React, { Component } from 'react';

import Header from '../component/Header'
import GanttCRUD from '../component/ForGantt/Gantt_CRUD'
import BreadCrumbForGantt from '../component/ForGantt/BreadCrumbForGantt'

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

    this.state = { data: data }
  }

  render() {
    return (
      <div>
        <Header />
        <BreadCrumbForGantt />
        <GanttCRUD
          data = {this.state.data} /> 
      </div>
    );
  }
}

export default GanttChartPage;