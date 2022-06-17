import React from 'react';
import { Base, BackGround } from '../styles/index';
import LoginFormLayout from '../components/LoginForm';

export default function Login() {
  return (
    <BackGround>
      <Base>
        <LoginFormLayout />
      </Base>
    </BackGround>
  );
}
