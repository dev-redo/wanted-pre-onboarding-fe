import React from 'react';
import styled from 'styled-components';
import { useLazyImageObserver } from '../../../hooks/useLazyImageObserver';

function LazyImg({ src, alt }) {
  const { imageSrc, imageRef } = useLazyImageObserver({ src });

  return <S.Img ref={imageRef} src={imageSrc} alt={alt} />;
}

export default React.memo(LazyImg);

// TODO: img 다운 전 회색 background로 대체
const S = {};
S.Img = styled.img`
  width: 100%;
  background-color: grey;
`;
