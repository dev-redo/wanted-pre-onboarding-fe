import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
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
        <S.Container>
          <LoginFormLayout />
        </S.Container>
      </BackGround>
    </>
  );
}

const S = {};
S.Container = styled(Base)`
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
