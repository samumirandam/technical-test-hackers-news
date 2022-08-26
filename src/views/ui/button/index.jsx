import React from "react";
import classnames from "classnames";

import "./button.scss";

const Button = ({ children, className, noStyles, onClick }) => {
  return (
    <button
      type="button"
      className={classnames("Button", className, {
        noStyles: noStyles,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
