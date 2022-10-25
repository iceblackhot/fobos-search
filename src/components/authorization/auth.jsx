import {React, useCallback, useState, useRef} from 'react';
import {useDispatch} from 'react-redux/es/exports';
import {setUser} from '../store/slices/userSlice';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FaceIcon from '@mui/icons-material/Face';
import sha256 from 'sha256';
import bcrypt from 'bcryptjs';
import './auth.scss';

export const Auth = ({setIsLoaded}) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [checked, setChecked] = useState('');

  const ajaxAuthRequest = useCallback(() => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const pwd = sha256(password);
    const hashedPassword = bcrypt.hashSync(pwd, 12);
    console.log(hashedPassword);

    setIsLoaded(false);

    fetch(process.env.REACT_APP_URL_SIGNIN, {
      method: 'post',
      mode: 'cors',
      withCredentials: true,
      body: JSON.stringify({
        email: email,
        password: hashedPassword,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.values);
          let id = result.values.id;
          let email = result.values.email;
          let token = result.values.token;

          setIsLoaded(true);
          //set JWT token to local
          localStorage.setItem('token', token);

          dispatch(
            setUser({
              email: email,
              token: localStorage.getItem('token', token),
              id: id,
            }),
          );
        },
        (error) => {
          setIsLoaded(true);
          // setError(error);
        },
      );
  }, [dispatch, setIsLoaded]);

  const submitHandler = (e) => {
    e.preventDefault();
    ajaxAuthRequest();
  };

  const classNameOn = `fobos-auth__iconon${showPass ? ' active' : ''}`;

  const classNameOff = `fobos-auth__iconoff${showPass ? ' active' : ''}`;

  const ShowPass = () => {
    setShowPass(!showPass);
    const input = document.querySelector('.pass');
    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="fobos-auth">
      <div className="fobos-auth__layout">
        <section className="fobos-auth">
          <div className="fobos-auth__wrapper">
            <div>
              <form className="fobos-auth__form" error={error} onSubmit={submitHandler}>
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
                    ref={emailInputRef}
                    placeholder="email"
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
