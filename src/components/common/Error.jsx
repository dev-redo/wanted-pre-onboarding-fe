import React from 'react';
import styled from 'styled-components';

function Error({ error, resetErrorBoundary }) {
  return (
    <S.Error>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </S.Error>
  );
}

export default React.memo(Error);

const S = {};
S.Error = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  font-size: 2rem;
`;
