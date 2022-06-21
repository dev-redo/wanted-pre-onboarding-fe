import React from 'react';
import styled from 'styled-components';
import Spinner from '../../../assets/icon/Spinner';

function Loader() {
  return (
    <S.Loader>
      <Spinner />
    </S.Loader>
  );
}

export default React.memo(Loader);

const S = {};
S.Loader = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;
