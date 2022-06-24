import React from 'react';
import styled from 'styled-components';
import { useLazyImageObserver } from '../../hooks/useLazyImageObserver';

function LazyImg({ src, alt }) {
  let isLoad = false;
  const { imageSrc, imageRef } = useLazyImageObserver({
    src,
  });

  return (
    <S.Lazy
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      onload={() => (isLoad = true)}
    />
  );
}

export default React.memo(LazyImg);

const S = {};
S.Lazy = styled.img`
  width: 100%;
  max-width: ${({ isLoad }) => isLoad || '45rem'};
  height: ${({ isLoad }) => isLoad || '45rem'};
  background-color: ${({ isLoad }) => isLoad || '#d5d5d5'};
`;
