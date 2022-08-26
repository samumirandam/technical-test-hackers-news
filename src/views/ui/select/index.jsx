import React from "react";
import classnames from "classnames";

const Select = ({ className, options, handleChange }) => {
  return (
    <select
      className={classnames("Select", className)}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
