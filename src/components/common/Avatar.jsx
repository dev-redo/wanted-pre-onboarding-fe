import React from 'react';
import styled from 'styled-components';

function Avatar({ user, width, height }) {
  return (
    <S.Avatar
      src={user.avatar}
      alt={user.name}
      width={width}
      height={height}
    />
  );
}

export default React.memo(Avatar);

const S = {};
S.Avatar = styled.img`
  width: ${({ width }) => (width ? `${width}rem` : 'max-content')};
  height: ${({ height }) =>
    height ? `${height}rem` : 'max-content'};
  border-radius: 50%;
`;
