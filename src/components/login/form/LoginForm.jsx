import React, { useMemo } from 'react';
import styled from 'styled-components';
import Form from '../../common/Form';

export default function LoginForm({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

LoginForm.Img = function LoginImg() {
  return (
    <S.Img
      src={require('../../../assets/image/Instargram-logo.png')}
    />
  );
};

LoginForm.Form = function LoginForm({ children, ...props }) {
  return <Form {...props} />;
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
  margin-bottom: 2rem;
`;
