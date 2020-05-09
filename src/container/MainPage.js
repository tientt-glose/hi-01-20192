import React, { Component } from 'react';

import Header from '../component/Header'
import Footer from '../component/Footer'
import Banner from '../component/ForMainPage/Banner'
import FeatureIntro from '../component/ForMainPage/FeatureIntro'
import QuickGuide from '../component/ForMainPage/QuickGuide'

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-wrapper">
          <Banner />
          <FeatureIntro />
          <QuickGuide />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;