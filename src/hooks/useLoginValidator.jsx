import React, { useState, useReducer, useEffect } from 'react';
import { ValidatorInput } from '../styles/index';
import { REGEX_EMAIL, REGEX_PW } from '../constants/regex';
import { validator } from '../util/validator';

const VALIDATE_EMAIL = Symbol();
const VALIDATE_PW = Symbol();

const initialValidState = {
  email: false,
  pw: false,
};

const validateReducer = (state, { type, value }) => {
  switch (type) {
    case VALIDATE_EMAIL:
      return { ...state, email: value };
    case VALIDATE_PW:
      return { ...state, pw: value };
    default:
      throw new Error('An Error Occurred');
  }
};

export default () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [validState, dispatchValidate] = useReducer(
    validateReducer,
    initialValidState,
  );
  const isSubmit = validState.email && validState.pw;

  useEffect(() => {
    const isValidEmail = email !== '' && validator(email, REGEX_EMAIL);
    const isValidPw = pw !== '' && validator(pw, REGEX_PW);
    dispatchValidate({ type: VALIDATE_EMAIL, value: isValidEmail });
    dispatchValidate({ type: VALIDATE_PW, value: isValidPw });
  }, [email, pw]);

  const renderInputs = () => (
    <>
      <ValidatorInput
        name="email"
        value={email}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        error={email !== '' && !validState.email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <ValidatorInput
        name="password"
        value={pw}
        type="password"
        placeholder="비밀번호"
        error={pw !== '' && !validState.pw}
        onChange={({ target: { value } }) => setPw(value)}
      />
    </>
  );

  return [isSubmit, renderInputs];
};
