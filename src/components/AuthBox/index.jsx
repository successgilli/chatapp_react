import React from 'react';

import AuthToggle from '../AuthToggle';
import Signup from '../Signup';
import Login from '../Login';

import './authBox.styles.scss';

const AuthBox = () => {
  const login = React.createRef();
  const signup = React.createRef();
  const handleToggleForm = (val) => {
    if (val) {
      login.current.style.left = '0';
      signup.current.style.left = '-400px';
    } else {
      login.current.style.left = '400px';
      signup.current.style.left = '0px';
    }
  };

  return (
    <div className="auth-box">
      <AuthToggle handleSliderClick={handleToggleForm} />
      <div ref={signup} className="auth-box_signup">
        <Signup />
      </div>
      <div ref={login} className="auth-box_login">
        <Login />
      </div>
    </div>
  );
};

export default AuthBox;
