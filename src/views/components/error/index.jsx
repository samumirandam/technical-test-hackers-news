import React from 'react';
import PropTypes from 'prop-types';

import './error.scss';

const Error = ({ error }) => (
  <div className="Error">
    <p>{error}</p>
  </div>
);

Error.propTypes = {
  error: PropTypes.string,
};

Error.defaultProps = {
  error: '',
};

export default Error;
