import React from 'react';
import styled from 'styled-components';

export default function Input({ name, values, placeholder, handlerChange }) {
  return (
    <S.Input
      name={name}
      values={values[name]}
      type={name === 'password' && 'password'}
      placeholder={placeholder}
      onChange={handlerChange}
    />
  );
}

const S = {};
S.Input = styled.input`
  border: 1px solid black;
`;
