import React from 'react';

import Header from '../../components/Header';
import HomeVideo from '../../components/HomeVideo';
import AuthBox from '../../components/AuthBox';

import './index.styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <section className="home">
          <div className="home_video">
            <HomeVideo />
          </div>
          <div className="home_auth">
            <AuthBox />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
