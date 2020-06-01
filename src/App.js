import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import MainPage from './container/MainPage'
import GanttChartPage from './container/GanttChartPage'
import ConstructionListPage from './container/ConstructionListPage';
import ChooseReportPage from './container/ChooseReportPage';
import CreateReportPage from './container/CreateReportPage';
import ConstructionAdd from './container/ConstructionAdd';
import ModuleMainPage from './container/ModuleMainPage';
import CreateReportTemplate from './container/CreateReportTemplate';

require('./scss/application.scss');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/'
            render={(props) => {
              return <MainPage />
            }} />

          <Route exact path='/module'
            render={(props) => {
              return <ModuleMainPage />
            }} />

          <Route exact path='/gantt'
            render={(props) => {
              return <GanttChartPage />
            }} />

          <Route exact path='/construction-list'
            render={(props) => {
              return <ConstructionListPage />
            }} />

          <Route exact path='/choose-report'
            render={(props) => {
              return <ChooseReportPage />
            }} />

          <Route exact path='/create-report'
            render={(props) => {
              return <CreateReportPage />
            }} />

          <Route exact path='/create-report-template'
            render={(props) => {
              return <CreateReportTemplate />
            }} />

          <Route exact path='/construction-add'
            render={(props) => {
              return <ConstructionAdd />
            }} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
