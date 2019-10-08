import React, { useState } from 'react';
import propTypes from 'prop-types';

import './authToggle.styles.scss';

const AuthToggle = ({ handleSliderClick }) => {
  const login = React.createRef();
  const signup = React.createRef();
  const slider = React.createRef();

  const [toggle, setToggle] = useState({ left: 0, right: '', form: 'login' });
  const handleClick = (e) => {
    if (e.target === login.current) {
      slider.current.style.left = '0px';
      setToggle({ form: 'login', left: 0, right: '' });
    } else {
      slider.current.style.left = '105px';
      setToggle({ form: 'signup', left: '', right: 0 });
    }
    handleSliderClick(e.target === login.current);
  };

  const { form } = toggle;

  return (
    <div className="auth-toggle">
      <div ref={slider} className="auth-toggle_slider" />
      <button ref={login} className={form === 'login' ? 'auth-toggle_btn_active' : 'auth-toggle_btn'} type="button" onClick={handleClick}>Login</button>
      <button ref={signup} className={form === 'signup' ? 'auth-toggle_btn_active' : 'auth-toggle_btn'} type="button" onClick={handleClick}>Signup</button>
    </div>
  );
};

AuthToggle.propTypes = {
  handleSliderClick: propTypes.func.isRequired,
};

export default AuthToggle;
