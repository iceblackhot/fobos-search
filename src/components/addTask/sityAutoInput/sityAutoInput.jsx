import React, {useState} from 'react';
import './sityAutoInput.scss';

export const SityAutoInput = ({sity, setSity}) => {
  const [open, setOpen] = useState(false);

  let sitiesNames = [
    {sityId: '1', name: 'Горишни Плавни'},
    {sityId: '2', name: 'Келеберда'},
    {sityId: '3', name: 'Григоро-Бригадировка'},
    {sityId: '4', name: 'Дмитровка'},
    {sityId: '5', name: 'Дружба'},
    {sityId: '6', name: 'Золотнище'},
    {sityId: '7', name: 'Коноплянка'},
    {sityId: '8', name: 'Мотрино'},
    {sityId: '9', name: 'Озера'},
    {sityId: '10', name: 'Подубное'},
    {sityId: '11', name: 'Пришиб'},
    {sityId: '12', name: 'Решетиловка'},
    {sityId: '13', name: 'Саловка'},
    {sityId: '14', name: 'Солошино'},
    {sityId: '15', name: 'Хорол'},
    {sityId: '16', name: 'Юнность'},
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
          setOpen(true);
        }}
      />
    </div>
  );
};
