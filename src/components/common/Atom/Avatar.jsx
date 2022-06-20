import React from 'react';
import styled from 'styled-components';

export default function Avatar({ user, width, height }) {
  return (
    <S.Avatar
      src={user.avatarUrl}
      alt={user.name}
      width={width}
      height={height}
    />
  );
}

const S = {};
S.Avatar = styled.img`
  width: ${({ width }) => (width ? `${width}rem` : 'max-content')};
  height: ${({ height }) => (height ? `${height}rem` : 'max-content')};
  border-radius: 50%;
`;
