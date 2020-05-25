import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import MainPage from './container/MainPage'
import GanttChartPage from './container/GanttChartPage'
import ConstructionListPage from './container/ConstructionListPage';

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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
