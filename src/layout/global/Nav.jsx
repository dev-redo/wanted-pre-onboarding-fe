import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isAuthorized } from '../../modules/atoms/auth';
import styled from 'styled-components';

export default function GlobalNav({ childeren, ...props }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(isAuthorized);

  const logoutHandler = e => {
    setAuth(!auth);
    localStorage.setItem('isAuthorized', JSON.stringify(!auth));
    navigate('/login', { replace: true });
  };

  return (
    <S.Nav {...props}>
      <S.Button />
      <S.Button />
      <S.Button onClick={logoutHandler}>Logout</S.Button>
    </S.Nav>
  );
}

const S = {};
S.Nav = styled.div`
  display: flex;
  gap: 1rem;
`;

S.Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  @media (max-width: 320px) {
    width: 2rem;
    height: 2rem;
  }
`;
