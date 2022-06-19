import React from 'react';
import { useRecoilValue } from 'recoil';
import { isAuthorized } from '../modules/atoms/auth';
import { Base, BackGround } from '../styles/index';
import LoginFormLayout from '../components/LoginForm';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const auth = useRecoilValue(isAuthorized);

  return (
    <>
      {auth && <Navigate to="/" replace={true} />}
      <BackGround>
        <Base>
          <LoginFormLayout />
        </Base>
      </BackGround>
    </>
  );
}
