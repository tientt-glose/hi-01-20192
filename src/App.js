import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import MainPage from './container/MainPage'
import GanttChartPage from './container/GanttChartPage'
import ConstructionListPage from './container/ConstructionListPage';
import ConstructionAdd from './container/ConstructionAdd';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/'
            render={(props) => {
              return <MainPage />
            }} />

          <Route exact path='/gantt'
            render={(props) => {
              return <GanttChartPage />
            }} />

          <Route exact path='/construction-list'
            render={(props) => {
              return <ConstructionListPage />
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
