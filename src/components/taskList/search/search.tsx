import {useEffect, useRef} from 'react';
import {useAppContext} from '../../appContext/appContext';
import './search.scss';

export const Search = () => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const {filterText, setFilterText} = useAppContext();

  useEffect(() => {
    if (searchInputRef.current) searchInputRef.current.focus();
  }, []);

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Пошук..."
        ref={searchInputRef}
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />
    </div>
  );
};
