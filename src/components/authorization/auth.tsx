import React, {useState, useRef} from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FaceIcon from '@mui/icons-material/Face';
import {useAppContext} from '../appContext/appContext';
import './auth.scss';

export const Auth = () => {
  const loginInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const [showPass, setShowPass] = useState(false);
  const [checked, setChecked] = useState<boolean>(false);

  const {checkAuth, error, setError} = useAppContext();

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const login: string | undefined = loginInputRef.current?.value as string;
    const password: string | undefined = passwordInputRef.current?.value as string;
    checkAuth(login, password, false);
  }

  const classNameOn = `fobos-auth__iconon${showPass ? ' active' : ''}`;

  const classNameOff = `fobos-auth__iconoff${showPass ? ' active' : ''}`;

  const ShowPass = () => {
    setShowPass(!showPass);
    const input: HTMLInputElement | null = document.querySelector('.pass');
    if (input !== null && input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input !== null && input.setAttribute('type', 'password');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="fobos-auth">
      <div className="fobos-auth__layout">
        <section className="fobos-auth">
          <div className="fobos-auth__wrapper">
            <div>
              <form className="fobos-auth__form" onSubmit={submitHandler}>
                <div className="fobos-auth__error-title">
                  <div className="fobos-auth__error">{error}</div>
                </div>
                <div className="fobos-auth_title">
                  <h1>Авториризація</h1>
                </div>
                <div className="fobos-auth__input">
                  <FaceIcon className="fobos-auth__iconface" fontSize="small" />
                  <input
                    type="text"
                    ref={loginInputRef}
                    placeholder="Логін"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="fobos-auth__input">
                  <VisibilityIcon className={classNameOn} fontSize="small" onClick={ShowPass} />
                  <VisibilityOffIcon className={classNameOff} fontSize="small" onClick={ShowPass} />
                  <input
                    className="pass"
                    type="password"
                    ref={passwordInputRef}
                    placeholder="Пароль"
                    autoComplete="off"
                    required
                  />
                </div>
                <input type="submit" value="Вхід" className="fobos-auth__button" />
                <div className="fobos-auth__options-wrapper">
                  <div className="input-holder">
                    <input
                      id="RememberMe"
                      type="checkbox"
                      checked={checked}
                      onChange={handleChange}
                    />
                    <label htmlFor="RememberMe">Запам'ятати</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
