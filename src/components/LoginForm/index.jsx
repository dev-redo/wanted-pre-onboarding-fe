import React from 'react';
import LoginForm from './LoginForm';
import useLoginValidator from '../../hooks/useLoginValidator';

export default function LoginFormLayout() {
  const [isSubmit, renderInputs] = useLoginValidator();
  return (
    <>
      <LoginForm>
        <LoginForm.Img />
        <LoginForm.Input renderInputs={renderInputs} />
        <LoginForm.Button isSubmit={isSubmit}>로그인</LoginForm.Button>
      </LoginForm>
    </>
  );
}
