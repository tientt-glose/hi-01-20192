import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './container/MainPage'
import GanttChartPage from './container/GanttChartPage'
import './App.css';

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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
