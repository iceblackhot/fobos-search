import {useContext} from 'react';
import {ThemeContext} from '../../providers/themeProvider';

export const useTheme = () => {
  const value = useContext(ThemeContext);

  return value;
};
