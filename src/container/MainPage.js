import React, { Component } from 'react';

import Header from '../component/Header'
import Footer from '../component/Footer'
import Banner from '../component/ForMainPage/Banner'
import FeatureIntro from '../component/ForMainPage/FeatureIntro'
import QuickGuide from '../component/ForMainPage/QuickGuide'

class MainPage extends Component {

  state = {
    message: this.props.message
  }

  render() {
    // const showMessage = this.state.message ? (
    //   <Button type="primary" onClick={this.openNotification}>
    //     Open the notification box
    //   </Button>
    // ) : (
    //   <div />
    // );
    return (
      <div>
        <Header />
        {/* {showMessage} */}
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