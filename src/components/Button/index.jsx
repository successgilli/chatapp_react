/* eslint-disable arrow-body-style */
import React from 'react';
import propTypes from 'prop-types';

import './button.styles.scss';

// eslint-disable-next-line arrow-body-style
const Button = ({
  classname, text, handleClick, wait,
}) => {
  return (
    <div>
      {
        wait ? <button onClick={handleClick} type="button" className={classname || 'button'}>{text}</button> : (
          <button type="button" className="button_wait">
            <div className="button_spin" />
          </button>
        )
}
    </div>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  classname: propTypes.string.isRequired,
  handleClick: propTypes.string.isRequired,
  wait: propTypes.bool.isRequired,
};

export default Button;
