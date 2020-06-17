import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { notification } from 'antd';

import './App.css';
import './scss/application.scss';
import MainPage from './container/MainPage'
import GanttChartPage from './container/GanttChartPage'
import ConstructionListPage from './container/ConstructionListPage';
import ChooseReportPage from './container/ChooseReportPage';
import CreateReportPage from './container/CreateReportPage';
import ConstructionAdd from './container/ConstructionAdd';
import ModuleMainPage from './container/ModuleMainPage';
import CreateReportTemplate from './container/CreateReportTemplate';
import SignIn from './container/SignIn';

class App extends React.Component {

  state = {
    message: ''
  }

  setMessage = (message) => {
    this.setState({ message })
  }

  openNotification = (mess) => {
    notification.open({
      message: mess,
      description: '',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/'
            render={(props) => {
              return <MainPage message={this.state.message}/>
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
              return <CreateReportPage openNotification={this.openNotification}/>
            }} />

          <Route exact path='/create-report-template'
            render={(props) => {
              return <CreateReportTemplate />
            }} />

          <Route exact path='/construction-add'
            render={(props) => {
              return <ConstructionAdd />
            }} />

          <Route exact path='/signin'
            render={(props) => {
              return <SignIn 
                        setMessage={this.setMessage}
                        openNotification={this.openNotification}/>
            }} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
