import React, { Children } from 'react';
import styled from 'styled-components';

function ErrorFallback({ error, reset }) {
  return (
    <S.Error>
      <p>페이지를 로드하던 중 에러가 발생했습니다!</p>
      <pre>{error.message}</pre>
      <button onClick={reset}>새로고침</button>
    </S.Error>
  );
}

export default React.memo(ErrorFallback);

const S = {};
S.Error = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  font-size: 1.5rem;
  button {
    width: 100%;
    height: 2rem;
    margin-top: 2rem;
    background-color: black;
    color: white;
  }
`;
