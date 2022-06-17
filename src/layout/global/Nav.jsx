import React from 'react';
import styled from 'styled-components';

export default function GlobalNav({ childeren, ...props }) {
  return (
    <S.Nav {...props}>
      <S.Button />
      <S.Button />
      <S.Button>Logout</S.Button>
    </S.Nav>
  );
}

const S = {};
S.Nav = styled.div`
  display: flex;
  gap: 1rem;
`;

S.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;
