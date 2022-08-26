import React from 'react';
import PropTypes from 'prop-types';

import './story-list.scss';

const StoryList = ({ children }) => (
  <section className="StoryList">{children}</section>
);

StoryList.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoryList;
