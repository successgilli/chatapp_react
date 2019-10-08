import React from 'react';
import PropTypes from 'prop-types';

import './input.styles.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      changeListener, type, name, placeholder, error,
    } = this.props;

    return (
      <div className="input_div">
        <input className="input" type={type} onChange={changeListener} name={name} placeholder={placeholder} autoComplete="off" />
        <div className={error ? 'input_error' : 'input_hide'}>{error}</div>
      </div>
    );
  }
}

Input.propTypes = {
  changeListener: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default Input;
