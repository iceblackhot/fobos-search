import './getInfoByLogin.scss';

export const GetInfoByLogin = () => {
  return (
    <div className="login-info">
      <input className="login-info__input" type="text" placeholder="Введіть логін" />
      <button className="login-info__btn">Відправити запит</button>
    </div>
  );
};
