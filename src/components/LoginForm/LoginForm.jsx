import React, { useMemo } from 'react';
import styled from 'styled-components';

export default function LoginForm({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

LoginForm.Img = function LoginImg() {
  return <S.Img src={require('../../assets/image/Instargram-text.png')} />;
};

LoginForm.Input = function LoginInput({ children, ...props }) {
  return <S.InputWrap {...props}>{props.renderInputs()}</S.InputWrap>;
};

LoginForm.Button = function LoginButton({ children, ...props }) {
  return <S.Button disabled={!props.isSubmit}>{children}</S.Button>;
};

const S = {};

S.Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

S.Img = styled.img`
  width: 50%;
  height: 5rem;
  margin-bottom: 2rem;
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
