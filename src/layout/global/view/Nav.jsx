import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useUserDispatch } from '../../../modules/context/auth';

export default function GlobalNav({ childeren, ...props }) {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const logoutCallback = async () => {
    alert('로그아웃 되었습니다.');
    dispatch({
      type: 'LOGOUT',
    });

    navigate('/login', { replace: true });
  };

  return (
    <S.Nav {...props}>
      <S.Button />
      <S.Button />
      <S.Button onClick={logoutCallback}>Logout</S.Button>
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
