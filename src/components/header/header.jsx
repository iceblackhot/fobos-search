import React from 'react';
import './header.scss';
import logo from '../assests/fobos_logo.png';

export const Header = () => {
  return (
    <div className="search-header">
      <div className="search-header__img-wrapper">
        <img className="search-header__img" src={logo} alt="Fobos logo" />
      </div>
    </div>
  );
};
