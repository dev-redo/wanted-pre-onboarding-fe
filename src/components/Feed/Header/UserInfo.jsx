import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../../common/Avatar';

function UserInfo({ user }) {
  return (
    <Link to="#">
      <S.Info>
        <Avatar user={user} width="2" height="2" />
        <span>{user.name}</span>
      </S.Info>
    </Link>
  );
}

export default React.memo(UserInfo);

const S = {};

S.Info = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  span {
    font-style: bolder;
    font-size: 1rem;
  }
`;
