import React from 'react';
import styled from 'styled-components';

function Error({ children }) {
  return <S.Error>{children}</S.Error>;
}

export default React.memo(Error);

const S = {};
S.Error = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  font-size: 3rem;
`;
