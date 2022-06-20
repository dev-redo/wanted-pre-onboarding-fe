import React from 'react';
import styled from 'styled-components';
import Spinner from '../../assets/icon/Spinner';

export default function Loader() {
  return (
    <S.Loader>
      <Spinner />
    </S.Loader>
  );
}

const S = {};
S.Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
