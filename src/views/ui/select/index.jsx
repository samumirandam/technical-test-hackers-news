import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './select.scss';

const Select = ({ className, options, handleChange }) => (
  <select
    className={classnames('Select', className)}
    onChange={(event) => {
      handleChange(event.target.value);
    }}
    data-testid="Select"
  >
    {options.map((option) => (
      <option
        key={option.value}
        value={option.value}
        selected={option.selected}
      >
        {option.label}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      selected: PropTypes.bool,
    }),
  ),
  handleChange: PropTypes.func,
};

Select.defaultProps = {
  className: '',
  options: [],
  handleChange: () => {},
};

export default Select;
