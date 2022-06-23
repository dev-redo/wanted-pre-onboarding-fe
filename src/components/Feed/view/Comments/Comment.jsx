import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LikeBtn from '../IconButton/LikeBtn';

export default function Comment({ comment }) {
  const { user, userComment } = comment;
  return (
    <S.Comment>
      <section>
        <Link to="#">
          <S.Name>{user}&nbsp;</S.Name>
        </Link>
        <span>{userComment}</span>
      </section>
      <LikeBtn width="1" height="1" />
    </S.Comment>
  );
}

const S = {};

S.Comment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.Name = styled.span`
  color: black;
  font-weight: bold;
`;
