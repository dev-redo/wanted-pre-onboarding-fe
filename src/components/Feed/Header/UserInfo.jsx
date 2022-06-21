import React from 'react';
import styled, { css } from 'styled-components';
import Avatar from '../../common/Atom/Avatar';

function UserInfo({ user, width, height }) {
  return (
    <S.Info>
      <Avatar user={user} width={width} height={height} />
      <span>{user.name}</span>
    </S.Info>
  );
}

export default React.memo(UserInfo);

const S = {};

S.Info = styled.section`
  display: flex;
  span {
    font-style: bolder;
    font-size: 1rem;
  }
`;
