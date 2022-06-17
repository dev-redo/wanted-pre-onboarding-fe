import React, { useMemo } from 'react';
import styled from 'styled-components';

export default function Header({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

Header.Img = function HeaderImg() {
  return <S.Img src={require('../../../assets/image/Instargram-text.png')} />;
};

Header.Input = function HeaderInput({ children, ...props }) {
  return <S.Input placeholder="검색" {...props} />;
};

const S = {};

S.Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0rem 10rem;
  margin-bottom: 1.5rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  @media (max-width: 1025px) {
    padding: 0rem 2rem;
  }
  outline: 1px solid #e4e4e4;
`;

S.Img = styled.img`
  width: 6rem;
  height: 2.5rem;
`;

S.Input = styled.input`
  width: 20rem;
  height: 2.5rem;
  padding-left: 2rem;
  border: 1px solid #e4e4e4;
  background-color: #efefef;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
