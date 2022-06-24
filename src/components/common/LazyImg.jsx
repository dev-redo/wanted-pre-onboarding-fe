import React, { useState } from 'react';
import styled from 'styled-components';
import { useLazyImageObserver } from '../../hooks/useLazyImageObserver';

function LazyImg({ src, alt }) {
  let [isLoad, setIsLoad] = useState(false);
  const { imageSrc, imageRef } = useLazyImageObserver({
    src,
  });

  return (
    <S.Lazy
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      isLoad={isLoad}
      onLoad={() => setIsLoad(true)}
    />
  );
}

export default React.memo(LazyImg);

const S = {};
S.Lazy = styled.img`
  width: 100%;
  ${({ isLoad }) =>
    !isLoad &&
    `
    background-color: #d5d5d5;
    max-width: 45rem;
    height: 45rem;
  `}
`;
