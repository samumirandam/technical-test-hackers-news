/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from '@ui/button';

import './page-tabs.scss';

const PageTabs = ({ className }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={classnames('PageTabs', className)}>
      <Button
        className={classnames('PageTabs__tab', {
          active: pathname !== '/favorites',
        })}
        onClick={() => navigate('/')}
      >
        All
      </Button>
      <Button
        className={classnames('PageTabs__tab', {
          active: pathname === '/favorites',
        })}
        onClick={() => navigate('/favorites')}
      >
        My faves
      </Button>
    </div>
  );
};

PageTabs.propTypes = {
  className: PropTypes.string,
};

PageTabs.defaultProps = {
  className: '',
};

export default PageTabs;
