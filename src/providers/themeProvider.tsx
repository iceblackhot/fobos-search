import React, {createContext, Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useAppContext} from '../components/appContext/appContext';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

type Props = {
  children: React.ReactNode;
};

interface IContext {
  isDark: boolean;
  setIsDark: TypeSetState<boolean>;
}

export const ThemeContext = createContext<IContext>({
  isDark: false,
  setIsDark: () => {},
});

export const ThemeProvider: React.FC<Props> = ({children}) => {
  const {getAppCookie, setAppCookieDark} = useAppContext();
  let cookie = getAppCookie();
  const [isDark, setIsDark] = useState<boolean>(cookie.isDark);

  useEffect(() => {
    const rootWrapper: HTMLElement | null = document.getElementById('root')!;
    setAppCookieDark(isDark);
    if (isDark && rootWrapper) {
      rootWrapper.classList.add('root-dark');
    } else {
      rootWrapper.classList.remove('root-dark');
    }
  }, [isDark]);

  return <ThemeContext.Provider value={{isDark, setIsDark}}>{children}</ThemeContext.Provider>;
};
