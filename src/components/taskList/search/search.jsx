import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './search.scss';

export const Search = () => {
  return (
    <div className="search">
      <SearchIcon className="search__ico" />
      <input className="search__input" type="text" placeholder="Пошук..." />
    </div>
  );
};
