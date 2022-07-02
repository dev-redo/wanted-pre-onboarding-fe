import React from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Base, BackGround } from '../styles/index';
import { useUserState } from '../modules/context/auth/provider';
import LoginFormLayout from '../components/LoginForm';

export default function Login() {
  const { token } = useUserState();

  return (
    <>
      {token && <Navigate to="/" replace={true} />}
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
