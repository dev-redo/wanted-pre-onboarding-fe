import React, { useState } from 'react';
import styled from 'styled-components';
import { validator } from '../../lib/util/validator';

export default function Form({ fieldData, submitCallback }) {
  let isSubmit = true;
  const inputValues = [];

  const FormInputs = fieldData.map((data, idx) => {
    const { name, type, regex } = data;
    const [value, setValue] = useState('');
    inputValues[name] = value;

    const isValidated = value !== '' && validator(value, regex);
    isSubmit &&= isValidated;

    return (
      <S.Input
        key={idx}
        name={name}
        type={type}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        error={isValidated.toString()}
      />
    );
  });

  const submitHandler = e => {
    e.preventDefault();
    submitCallback(isSubmit, inputValues);
  };

  return (
    <>
      <S.InputWrap>{FormInputs}</S.InputWrap>
      <S.Button disabled={!isSubmit} onClick={submitHandler}>
        로그인
      </S.Button>
    </>
  );
}

const S = {};

S.Input = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: #fafafa;
  border: 1px solid ${({ error }) => (error === 'false' ? '#dbdbdb' : 'red')};
  border-radius: 5px;
  padding-left: 2rem;
  font-size: 1.2rem;
`;

S.InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

S.Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bolder;
  color: white;
  background-color: #0195f7;
  &:disabled {
    cursor: default;
    background-color: #b2dffc;
  }
`;
