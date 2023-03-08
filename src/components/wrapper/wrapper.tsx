import {WrapperProps} from '../../@types/ftypes';
import {useAppContext} from '../appContext/appContext';
import {Auth} from '../authorization/auth';

import {useTheme} from '../hooks/useTheme';

export const Wrapper = ({children}: WrapperProps) => {
  const {isDark} = useTheme();

  const {isAuthenticated} = useAppContext();

  return isAuthenticated ? (
    <div className={!isDark ? 'wrapper' : 'wrapper dark'}>{children}</div>
  ) : (
    <Auth />
  );
};
