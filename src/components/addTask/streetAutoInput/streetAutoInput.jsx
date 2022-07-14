import React, {useState} from 'react';
import './streetAutoInput.scss';

export const StreetAutoInput = ({street, setStreet, sity, setSity}) => {
  const [open, setOpen] = useState(false);

  //   console.log(sity);

  let streetNames = [
    {sityId: '1', streetId: '1', name: 'Патриса Лумумбы'},
    {sityId: '1', streetId: '2', name: 'Павлика Морорзова'},
    {sityId: '2', streetId: '3', name: 'Жданова'},
    {sityId: '2', streetId: '4', name: 'Кирова'},
    {sityId: '3', streetId: '5', name: 'Калининская'},
    {sityId: '3', streetId: '6', name: 'Вишневая'},
    {sityId: '4', streetId: '7', name: 'Полтавский Проспект'},
    {sityId: '4', streetId: '8', name: 'Героев Днепра'},
    {sityId: '5', streetId: '9', name: 'Космонавтов'},
    {sityId: '5', streetId: '10', name: 'Портовая'},
    {sityId: '6', streetId: '11', name: 'Мира'},
    {sityId: '6', streetId: '12', name: 'Горняков'},
    {sityId: '7', streetId: '13', name: 'Сезам'},
    {sityId: '7', streetId: '14', name: 'Щорса'},
    {sityId: '8', streetId: '15', name: 'Островкского'},
    {sityId: '8', streetId: '16', name: 'Академика Шлихтера'},
    {sityId: '9', streetId: '17', name: 'Юрия Коцюбинского'},
    {sityId: '9', streetId: '18', name: 'Днепропетровская'},
    {sityId: '10', streetId: '19', name: 'Киевская'},
    {sityId: '10', streetId: '20', name: 'Вифлиемская'},
    {sityId: '11', streetId: '21', name: 'Горького'},
    {sityId: '11', streetId: '22', name: 'Ломоносова'},
    {sityId: '12', streetId: '23', name: 'Ивана Клименко'},
    {sityId: '12', streetId: '24', name: 'Чудновского'},
    {sityId: '13', streetId: '25', name: 'Фадеева'},
    {sityId: '13', streetId: '26', name: 'Леси Украинки'},
    {sityId: '14', streetId: '27', name: 'Шевченко'},
    {sityId: '14', streetId: '28', name: 'Большая Набережная'},
    {sityId: '15', streetId: '29', name: 'Проспект Свободы'},
    {sityId: '15', streetId: '30', name: 'Кобзарская'},
    {sityId: '16', streetId: '31', name: 'Владимира Великого'},
    {sityId: '16', streetId: '32', name: 'Козацкой Славы'},
  ];

  let disabled = '';

  let filterStreet = streetNames.filter((sityStreet) => {
    return sityStreet.name.toLocaleLowerCase().includes(street.toLocaleLowerCase());
  });

  let streetList = filterStreet.map((streetName, index) => {
    function handleChangeStreet() {
      setStreet(streetName.name);
      setOpen(false);
    }
    if (street) {
      //   console.log(street);
      return (
        <div
          className={open ? 'optionStreet' : 'optionStreet hidden'}
          onClick={handleChangeStreet}
          key={index}>
          <span style={{color: 'grey', fontSize: '15px'}}>{streetName.name}</span>
        </div>
      );
    }
    if (!sity) {
      disabled = 'disabled';
    }
  });

  return (
    <div>
      {streetList}
      <input
        disabled={disabled}
        placeholder="Улица"
        type="text"
        value={street}
        onChange={(e) => {
          setStreet(e.target.value);
          setOpen(true);
        }}
      />
    </div>
  );
};
