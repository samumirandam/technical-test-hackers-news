/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/header';

import './layout.scss';

const Layout = ({ children }) => (
  <div className="Layout" data-testid="Layout">
    <Header />
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
