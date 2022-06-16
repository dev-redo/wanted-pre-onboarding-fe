import React, { useMemo } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';

export default function LoginForm({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

LoginForm.Input = function LoginInput({ children, ...props }) {
  return (
    <S.InputWrap {...props}>
      <Input
        name="email"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        {...props}
      />
      <Input name="password" placeholder="비밀번호" {...props} />
    </S.InputWrap>
  );
};

LoginForm.Button = function LoginButton({ children, ...props }) {
  return <S.Button disabled={!props.isAllValid}>{children}</S.Button>;
};

const S = {};

S.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 45rem;
`;

S.InputWrap = styled.div`
  display: flex;
`;

S.Button = styled.button`
  cursor: pointer;
  background-color: #0195f7;
  &:disabled {
    cursor: default;
    background-color: #b2dffc;
  }
`;
