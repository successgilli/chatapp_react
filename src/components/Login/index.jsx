import React from 'react';

import Input from '../Input';
import Button from '../Button';
import validate from '../../util/validator';

import './login.styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btnLoading: true,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: validate(e.target.name, e.target.value),
    });
  }

  render() {
    const {
      email, password, btnLoading,
    } = this.state;
    // eslint-disable-next-line no-console
    const handleBtnClick = (e) => console.log(e.target);

    return (
      <div className="login">
        <Input type="email" placeholder="Email" error={email} changeListener={this.handleInputChange} name="email" />
        <Input type="password" placeholder="Password" error={password} changeListener={this.handleInputChange} name="password" />
        <Button text="Login" wait={btnLoading} handleClick={handleBtnClick} />
      </div>
    );
  }
}

export default Login;
