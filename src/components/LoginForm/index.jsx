import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isAuthorized } from '../../modules/atoms/auth';
import { findUser } from '../../lib/api/findUser';
import { REGEX_EMAIL, REGEX_PW } from '../../constants/regex';
import LoginForm from './LoginForm';
import Form from '../common/Form';

export default function LoginFormLayout() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(isAuthorized);

  const fieldData = [
    { name: 'email', type: 'text', regex: REGEX_EMAIL },
    { name: 'password', type: 'password', regex: REGEX_PW },
  ];

  const loginCallback = (isValid, inputValues) => {
    if (!isValid) return;

    const isUserExist = findUser(inputValues);
    if (!isUserExist) {
      alert('아이디 또는 비밀번호를 잘못 입력하셨습니다!');
      return;
    }

    setAuth(!auth);
    localStorage.setItem('isAuthorized', JSON.stringify(!auth));
    navigate('/', { replace: true });
  };

  return (
    <>
      <LoginForm>
        <LoginForm.Img />
        <Form fieldData={fieldData} submitCallback={loginCallback} />
      </LoginForm>
    </>
  );
}
