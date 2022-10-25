import React from 'react';
import logo from '../assests/fobos_logo.png';
import {useDispatch} from 'react-redux/es/hooks/useDispatch';
import {removeUser} from '../store/slices/userSlice';
import './header.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    //Need kill token...
    dispatch(removeUser());
  };

  return (
    <div className="search-header">
      <div className="search-header__img-wrapper">
        <img className="search-header__img" src={logo} alt="Fobos logo" />
      </div>
      <div>
        <button onClick={handleLogOut}>Вийти</button>
      </div>
    </div>
  );
};
