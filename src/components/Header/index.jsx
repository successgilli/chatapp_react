import React from 'react';

import logo1 from '../../assets/images/logo1.svg';

import './index.styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="header_first">
          <img src={logo1} alt="" />
        </div>
        <div className="header_second" />
      </div>
    );
  }
}

export default Header;
