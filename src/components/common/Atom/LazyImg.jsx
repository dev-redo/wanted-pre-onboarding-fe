import React from 'react';
import styled from 'styled-components';
import { useLazyImageObserver } from '../../../hooks/useLazyImageObserver';

function LazyImg({ src, alt }) {
  const { isLoad, imageSrc, imageRef } = useLazyImageObserver({ src });

  return <S.Lazy isLoad={isLoad} ref={imageRef} src={imageSrc} alt={alt} />;
}

export default React.memo(LazyImg);

const S = {};
S.Lazy = styled.img`
  width: 100%;
  max-width: ${({ isLoad }) => isLoad || '45rem'};
  height: ${({ isLoad }) => isLoad || '45rem'};
  background-color: ${({ isLoad }) => isLoad || '#d5d5d5'};
`;
