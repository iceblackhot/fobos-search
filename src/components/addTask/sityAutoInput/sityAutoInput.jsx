import React, {useState} from 'react';
import './sityAutoInput.scss';

export const SityAutoInput = ({sity, setSity}) => {
  const [open, setOpen] = useState(false);

  let sitiesNames = [
    {name: 'Горишни Плавни'},
    {name: 'Келеберда'},
    {name: 'Григоро-Бригадировка'},
    {name: 'Дмитровка'},
    {name: 'Дружба'},
    {name: 'Золотнище'},
    {name: 'Коноплянка'},
    {name: 'Мотрино'},
    {name: 'Озера'},
    {name: 'Подубное'},
    {name: 'Пришиб'},
    {name: 'Решетиловка'},
    {name: 'Саловка'},
    {name: 'Солошино'},
    {name: 'Хорол'},
    {name: 'Юнность'},
  ];

  let filterSity = sitiesNames.filter((sityName) => {
    return sityName.name.toLowerCase().includes(sity.toLowerCase());
  });

  let sityList = filterSity.map((sityName, index) => {
    function handleChangeSity() {
      setSity(sityName.name);
      setOpen(false);
    }

    if (sity) {
      return (
        <div
          className={open ? 'optionSity' : 'optionSity hidden'}
          onClick={handleChangeSity}
          key={index}>
          <span style={{color: 'grey', fontSize: '15px'}}>{sityName.name}</span>
        </div>
      );
    }
  });

  return (
    <div>
      {sityList}
      <input
        placeholder="Город"
        type="text"
        value={sity}
        onChange={(e) => {
          setSity(e.target.value);
          console.log(sity);
          setOpen(true);
        }}
      />
    </div>
  );
};
