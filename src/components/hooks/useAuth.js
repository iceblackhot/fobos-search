import {useSelector} from 'react-redux/es/exports';

export function useAuth() {
  const {email, token, id} = useSelector((state) => state.user);

  return {
    isAuth: !!token,
    email,
    token,
    id,
  };
}
