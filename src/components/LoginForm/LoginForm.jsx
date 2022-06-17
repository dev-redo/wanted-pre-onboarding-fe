import React, { useMemo } from 'react';
import styled from 'styled-components';

export default function LoginForm({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

LoginForm.Input = function LoginInput({ children, ...props }) {
  return <S.InputWrap {...props}>{props.renderInputs()}</S.InputWrap>;
};

LoginForm.Button = function LoginButton({ children, ...props }) {
  return <S.Button disabled={!props.isSubmit}>{children}</S.Button>;
};

const S = {};

S.Container = styled.form`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

S.InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

S.Button = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: #0195f7;
  &:disabled {
    cursor: default;
    background-color: #b2dffc;
  }
`;
