import React from 'react';
import LoginForm from './LoginForm';
import useForm from '../../hooks/useForm';
import { validator } from '../../util/checkInputValidate';

const inputRegex = {
  email:
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*[a-zA-Z]{2,3}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export default function LoginFormLayout() {
  const { values, valuesChangeHandler, error, isAllValid } = useForm({
    initValues: { email: '', password: '' },
    validator,
    inputRegex,
  });

  return (
    <>
      <LoginForm>
        <LoginForm.Input
          values={values}
          handlerChange={valuesChangeHandler}
          error={error}
        />
        <LoginForm.Button isAllValid={isAllValid}>로그인</LoginForm.Button>
      </LoginForm>
    </>
  );
}
