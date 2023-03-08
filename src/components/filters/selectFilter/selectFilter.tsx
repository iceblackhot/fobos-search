import {OptionList} from '../../../@types/ftypes';
import {useState} from 'react';

type SelectFilterProps = {
  filterListItems: Array<OptionList>;
  filterSelected: Array<string>;
  filterSetSelected: (list: Array<string>) => void;
  placeholder?: string;
};

export const SelectFilter = ({
  filterListItems,
  filterSelected,
  filterSetSelected,
  placeholder,
}: SelectFilterProps) => {
  const [filterText, setFilterText] = useState<string>('');

  const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {options} = event.target;
    const value: string[] = [];

    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
        console.log(value);
      }
    }

    filterSetSelected(value);
    console.log(filterSelected);
  };

  return (
    <div className="search-filters__container">
      <div className="search-filters__header">
        <input
          className="search-filters__input"
          placeholder={placeholder}
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}></input>
        <button className="search-filters__res-btn" onClick={() => setFilterText('')}>
          reset
        </button>
      </div>
      <select
        className="search-filters__select"
        multiple={true}
        value={filterSelected}
        onChange={handleChangeMultiple}>
        {filterListItems
          .filter((item) => {
            return (
              item.name.toLowerCase().includes(filterText.toLowerCase()) ||
              filterSelected.indexOf(item.id.toString()) >= 0
            );
          })
          .map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}({item.total})
              </option>
            );
          })}
      </select>
    </div>
  );
};
