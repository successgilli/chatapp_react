import React from 'react';

import Input from '../Input';
import Button from '../Button';
import validate from '../../util/validator';

import './signup.styles.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
      name, email, password, btnLoading,
    } = this.state;
    // eslint-disable-next-line no-console
    const handleBtnClick = (e) => console.log(e.target);

    return (
      <div className="signup">
        <Input type="text" placeholder="Username" error={name} changeListener={this.handleInputChange} name="name" />
        <Input type="email" placeholder="Email" error={email} changeListener={this.handleInputChange} name="email" />
        <Input type="password" placeholder="Password" error={password} changeListener={this.handleInputChange} name="password" />
        <Button text="Signup" wait={btnLoading} handleClick={handleBtnClick} />
      </div>
    );
  }
}

export default Signup;
