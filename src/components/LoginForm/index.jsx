import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isAuthorized } from '../../modules/atoms/auth';
import useHttp from '../../hooks/useHttp';
import { findUser } from '../../lib/api/auth/findUser';
import { REGEX_EMAIL, REGEX_PW } from '../../constants/regex';
import LoginForm from './LoginForm';
import Form from '../common/Form';

export default function LoginFormLayout() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(isAuthorized);

  const fieldData = [
    {
      name: 'email',
      placeholder: '전화번호, 사용자 이름 또는 이메일',
      type: 'text',
      regex: REGEX_EMAIL,
    },
    {
      name: 'password',
      placeholder: '비밀번호',
      type: 'password',
      regex: REGEX_PW,
    },
  ];

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
