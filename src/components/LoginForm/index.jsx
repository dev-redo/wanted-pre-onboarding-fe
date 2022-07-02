import React from 'react';
import LoginForm from './LoginForm';
import { loginField } from '../../constants/fieldData';
import { useUserDispatch } from '../../modules/context/auth/provider';
import { useNavigate } from 'react-router-dom';
import { getRegisterUserList } from '../../api/auth';
import { findUser } from './domain/findUser';
import { extractIdFromEmail } from './domain/extractIdFromEmail';

export default function LoginFormLayout() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const loginCallback = async (isValid, inputValues) => {
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

  return (
    <LoginForm>
      <LoginForm.Img />
      <LoginForm.Form
        fieldData={loginField}
        submitCallback={loginCallback}
      />
    </LoginForm>
  );
}
