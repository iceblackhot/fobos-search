import {useContext} from 'react';
import {ThemeContext} from '../../providers/themeProvider';
import {useAppContext} from '../appContext/appContext';
import './header.scss';

export const Header = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);
  const {checkAuth} = useAppContext();

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="search-header">
      <div className="search-header__img-wrapper"></div>
      <div className="search-header__title-wrapper">
        <h1>FOBOS SEARCH</h1>
      </div>
      <div className="search-header__buttons-wrapper">
        <button className="search-header__button-theme" onClick={changeTheme}>
          Dark mode
        </button>
        <button
          className="search-header__button-logout"
          onClick={() => {
            checkAuth('', '', true);
          }}>
          Вийти
        </button>
      </div>
    </div>
  );
};
