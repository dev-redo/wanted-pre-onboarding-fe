import React from 'react';
import LoginForm from './LoginForm';
import { loginField } from '../../../constants/fieldData';
import { useAuth } from '../../../hooks/useAuth';

export default function LoginFormLayout() {
  const { loginCallback } = useAuth();

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
