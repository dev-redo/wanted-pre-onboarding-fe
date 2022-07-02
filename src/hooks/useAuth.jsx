import { useNavigate } from 'react-router-dom';
import { useUserDispatch } from '../modules/context/auth/provider';
import { getRegisterUserList } from '../api/auth';
import { extractIdFromEmail } from '../components/LoginForm/domain/extractIdFromEmail';
import { findUser } from '../components/LoginForm/domain/findUser';

const getLoginCallback = (navigate, dispatch) => {
  return async (isValid, inputValues) => {
    if (!isValid) return;
    const registerUserList = await getRegisterUserList();
    const isUserExist = await findUser(inputValues, registerUserList);

    if (!isUserExist) {
      alert('아이디 또는 비밀번호를 잘못 입력하셨습니다!');
      return;
    }

    dispatch({
      type: 'LOGIN',
      userId: extractIdFromEmail(inputValues.email),
    });

    alert('로그인 성공하였습니다.');
    navigate('/', { replace: true });
  };
};

const getLogoutCallback = (navigate, dispatch) => {
  return async () => {
    alert('로그아웃 되었습니다.');
    dispatch({
      type: 'LOGOUT',
    });

    navigate('/login', { replace: true });
  };
};

export function useAuth() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const loginCallback = getLoginCallback(navigate, dispatch);
  const logoutCallback = getLogoutCallback(navigate, dispatch);

  return { loginCallback, logoutCallback };
}
