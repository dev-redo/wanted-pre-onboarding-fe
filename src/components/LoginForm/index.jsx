import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authToken, userInfo } from '../../modules/atoms/auth';
import useHttp from '../../hooks/useHttp';
import { findUser } from '../../lib/api/auth/findUser';
import LoginForm from './LoginForm';
import Form from '../common/Form';

import { loginField } from '../../constants/fieldData';

export default function LoginFormLayout() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authToken);
  const [user, setUser] = useRecoilState(userInfo);

  const loginCallback = async (isValid, inputValues) => {
    if (!isValid) return;

    const registerUserList = await useHttp({
      url: './data/registerUserList.json',
    });
    const isUserExist = await findUser(inputValues, registerUserList);

    if (!isUserExist) {
      alert('아이디 또는 비밀번호를 잘못 입력하셨습니다!');
      return;
    }

    setAuth(!auth);
    localStorage.setItem('authToken', JSON.stringify(!auth));
    setUser(inputValues.email);
    localStorage.setItem('userInfo', JSON.stringify(inputValues.email));

    navigate('/', { replace: true });
  };

  return (
    <LoginForm>
      <LoginForm.Img />
      <Form fieldData={loginField} submitCallback={loginCallback} />
    </LoginForm>
  );
}
