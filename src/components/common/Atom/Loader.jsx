import React from 'react';
import styled from 'styled-components';
import Spinner from '../../../assets/icon/Spinner';

export default function Loader() {
  return (
    <S.Loader>
      <Spinner />
    </S.Loader>
  );
}

const S = {};
S.Loader = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;
