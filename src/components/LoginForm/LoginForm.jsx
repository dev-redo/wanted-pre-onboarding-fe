import React, { useMemo } from 'react';
import styled from 'styled-components';

export default function LoginForm({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

LoginForm.Img = function LoginImg() {
  return <S.Img src={require('../../assets/image/Instargram-text.png')} />;
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
