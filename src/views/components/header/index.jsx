/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@ui/button';

import './header.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <header className="Header">
      <Button className="Header__logo" noStyles onClick={handleClick}>
        <p className="Header__title">HACKER NEWS</p>
      </Button>
    </header>
  );
};

export default Header;
