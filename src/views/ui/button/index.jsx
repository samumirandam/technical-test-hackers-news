import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.scss';

const Button = ({
  children, className, noStyles, onClick,
}) => (
  <button
    type="button"
    className={classnames('Button', className, {
      noStyles,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  noStyles: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
  noStyles: false,
};

export default Button;
