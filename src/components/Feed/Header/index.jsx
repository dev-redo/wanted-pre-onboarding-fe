import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import IconButton from '../../common/Atom/IconButton';
import { BsThreeDots } from 'react-icons/bs';

function Header({ user }) {
  return (
    <S.Header>
      <UserInfo user={user} />
      <IconButton>
        <BsThreeDots />
      </IconButton>
    </S.Header>
  );
}

export default React.memo(Header);

const S = {};
S.Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1rem;
`;
